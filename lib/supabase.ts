import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

let client: SupabaseClient | null = null;

/** Browser Supabase client (publishable / anon key only). */
export function getSupabase(): SupabaseClient | null {
  if (!url || !key) return null;
  if (!client) {
    client = createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return client;
}

/**
 * Sign in with a Supabase Auth provider (Google, GitHub, etc.).
 * Enable the provider under Supabase → Authentication → Providers.
 */
export async function signInWithProvider(
  provider: "google" | "github" | "azure" | "facebook" | "apple"
) {
  const sb = getSupabase();
  if (!sb) throw new Error("Supabase is not configured");
  return sb.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo:
        typeof window !== "undefined"
          ? `${window.location.origin}/login`
          : undefined,
    },
  });
}

export async function signInWithPassword(email: string, password: string) {
  const sb = getSupabase();
  if (!sb) throw new Error("Supabase is not configured");
  return sb.auth.signInWithPassword({ email, password });
}

export async function signOutSupabase() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
}
