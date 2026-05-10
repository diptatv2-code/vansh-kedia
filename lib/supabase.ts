import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function submitLead(data: {
  name: string
  email: string
  service: string
  message: string
}) {
  const { error } = await supabase.schema("vansh").from("leads").insert([data])
  if (error) throw error
}
