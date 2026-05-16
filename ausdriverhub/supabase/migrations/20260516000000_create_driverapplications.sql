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
