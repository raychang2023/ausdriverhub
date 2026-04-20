/*
  # Add city field to driver_registrations

  1. Changes
    - `driver_registrations` table: add `city` column (text, not null, default 'Sydney')
      - Stores the driver's selected city/region: Sydney, Brisbane, or Melbourne

  2. Notes
    - Existing rows will default to 'Sydney'
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'driver_registrations' AND column_name = 'city'
  ) THEN
    ALTER TABLE driver_registrations ADD COLUMN city text NOT NULL DEFAULT 'Sydney';
  END IF;
END $$;
