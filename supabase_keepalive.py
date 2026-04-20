#!/usr/bin/env python3
import urllib.request
import urllib.error
import sys

SUPABASE_URL = "https://tjfhsrknejumdhqlnwcg.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZmhzcmtuZWp1bWRocWxud2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MTA5MjIsImV4cCI6MjA5MTM4NjkyMn0.a3mFkOMXgZfzFejKffUbUZdP3r_FFDGFylQ5ynVhf7I"

def ping_supabase():
    """Ping Supabase to keep it alive"""
    try:
        url = f"{SUPABASE_URL}/rest/v1/driver_registrations?select=id&limit=1"
        req = urllib.request.Request(url, headers={
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}"
        })
        with urllib.request.urlopen(req, timeout=30) as response:
            status = response.status
            print(f"[{status}] Supabase pinged successfully")
            return True
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(f"[{e.code}] Table not found but Supabase is alive")
            return True
        print(f"HTTP Error: {e.code}")
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    success = ping_supabase()
    sys.exit(0 if success else 1)
