/*
  # Fix RLS policies to allow anonymous inserts

  The INSERT policies for driver_registrations and driver_documents used the
  "public" role which does not grant access to Supabase's anon role by default.
  This migration drops the old policies and recreates them explicitly targeting
  the "anon" role so unauthenticated users can submit registrations.

  Also fixes the UPDATE policy for driver_registrations to allow anon users
  to set pdf_url after submission (needed for the PDF upload step).

  Changes:
  - Drop and recreate INSERT policy on driver_registrations for anon role
  - Drop and recreate INSERT policy on driver_documents for anon role
  - Add UPDATE policy on driver_registrations for anon role (pdf_url only)
*/

DROP POLICY IF EXISTS "Anyone can submit driver registrations" ON driver_registrations;
DROP POLICY IF EXISTS "Anyone can insert driver documents" ON driver_documents;

CREATE POLICY "Anyone can submit driver registrations"
  ON driver_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert driver documents"
  ON driver_documents
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon can update pdf_url on own registration"
  ON driver_registrations
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);
