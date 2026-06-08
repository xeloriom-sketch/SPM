import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL!;
const key = process.env.SUPABASE_ANON_KEY!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? key;

export const supabase = createClient(url, key);
export const supabaseAdmin = createClient(url, serviceKey);

export type ContactMessage = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string | null;
  message: string | null;
  read: boolean;
  created_at: string;
};

export type Setting = {
  key: string;
  value: string;
};
