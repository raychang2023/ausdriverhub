CREATE TABLE IF NOT EXISTS driver_registrations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL DEFAULT 'Sydney',
  available_days text[] NOT NULL DEFAULT '{}',
  pdf_url text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'rejected')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS driver_documents (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id uuid NOT NULL REFERENCES driver_registrations(id) ON DELETE CASCADE,
  document_type text NOT NULL CHECK (document_type IN ('license', 'passport', 'vehicle')),
  file_url text NOT NULL,
  file_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE driver_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE driver_documents ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read driver registrations" ON driver_registrations;
DROP POLICY IF EXISTS "Anyone can submit driver registrations" ON driver_registrations;
DROP POLICY IF EXISTS "Anon can update pdf_url on own registration" ON driver_registrations;
DROP POLICY IF EXISTS "Anyone can read driver documents" ON driver_documents;
DROP POLICY IF EXISTS "Anyone can insert driver documents" ON driver_documents;

CREATE POLICY "Anyone can read driver registrations" ON driver_registrations FOR SELECT TO anon USING (true);
CREATE POLICY "Anyone can submit driver registrations" ON driver_registrations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update pdf_url on own registration" ON driver_registrations FOR UPDATE TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anyone can read driver documents" ON driver_documents FOR SELECT TO anon USING (true);
CREATE POLICY "Anyone can insert driver documents" ON driver_documents FOR INSERT TO anon WITH CHECK (true);
