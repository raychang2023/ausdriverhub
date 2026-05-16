# AusDriverHub Production Deployment Runbook

This runbook is for deploying the redesigned site without losing existing production data.

## Core Rule

Do not point `ausdriverhub.com` at the test PocketBase data directory.

- Test PocketBase data: `/var/www/pb-test/pb_data`
- Recommended production PocketBase data: `/var/www/pb-prod/pb_data`
- `test.ausdriverhub.com` and `ausdriverhub.com` must not share the same `pb_data`.

## Data Source Decision

Before deploying, confirm where the current production data lives.

### Option A: Keep Production on Supabase

Use this when existing production data is still in Supabase.

Build settings:

```bash
unset VITE_USE_POCKETBASE
npm run build
```

Required env:

```bash
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Required Supabase tables used by the current frontend:

- `driverregistrations`
- `driverdocuments`
- `driverapplications`

Create `driverapplications` before deploying the new homepage form:

```sql
create table if not exists driverapplications (
  id uuid primary key default gen_random_uuid(),
  fullname text not null,
  mobile text not null,
  email text not null,
  state text not null,
  suburb text not null,
  postcode text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'archived')),
  created_at timestamptz not null default now()
);

alter table driverapplications enable row level security;

drop policy if exists "Anyone can submit driver applications" on driverapplications;
drop policy if exists "Authenticated admins can read driver applications" on driverapplications;

create policy "Anyone can submit driver applications"
  on driverapplications
  for insert
  to anon
  with check (true);

create policy "Authenticated admins can read driver applications"
  on driverapplications
  for select
  to authenticated
  using (true);
```

Nginx:

- Keep production as static hosting.
- Do not add `/api/` or `/_/` proxy rules unless production is intentionally moved to PocketBase.

### Option B: Move Production to PocketBase

Use this only after production data has been backed up and migrated.

Production PocketBase must be separate from test:

```bash
/path/to/pocketbase serve --http=127.0.0.1:8091 --dir=/var/www/pb-prod/pb_data
```

Build settings:

```bash
VITE_USE_POCKETBASE=true npm run build
```

The current frontend still requires Supabase env values at build time, even in PocketBase mode:

```bash
VITE_SUPABASE_URL=https://placeholder.supabase.co
VITE_SUPABASE_ANON_KEY=placeholder
VITE_USE_POCKETBASE=true
```

Production PocketBase collections needed:

- `users`
- `driverregistrations`
- `driverdocuments`
- `driverapplications`

`driverapplications` fields:

- `fullname` text
- `mobile` text
- `email` email or text
- `state` text
- `suburb` text
- `postcode` text
- `status` select/text, default `new`

Nginx for `ausdriverhub.com` must proxy production PocketBase only:

```nginx
location /api/ {
  proxy_pass http://127.0.0.1:8091/api/;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}

location /_/ {
  proxy_pass http://127.0.0.1:8091/_/;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

## Backup Checklist

Before any production deploy:

1. Back up the current production static site directory.
2. Back up the current production database:
   - Supabase SQL dump if production is Supabase.
   - PocketBase `pb_data` copy if production is PocketBase.
3. Back up `/var/www/pb-test/pb_data` if the test database has useful test records.
4. Save backups outside the deploy directory.
5. Record which backend mode the build uses.

## Preflight Checks

Run locally or in CI before deploying:

```bash
npm run preflight:production -- --mode=supabase
```

or:

```bash
npm run preflight:production -- --mode=pocketbase --pb-dir=/var/www/pb-prod/pb_data
```

The preflight check blocks the most dangerous mistake: using `/var/www/pb-test/pb_data` for production.

## Smoke Test After Deploy

- `/` loads and homepage Register form submits.
- `/admin/applications` shows homepage driver applications and exports CSV.
- `/guide` opens the guide flow.
- `/register` submits the full onboarding form.
- `/admin/dashboard` still shows completed onboarding registrations.
- `/login` redirects to `/admin/login`.
- Admin login/logout works.
- Existing uploaded document images and PDF links still open.
