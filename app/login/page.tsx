"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { login, setToken } from "@/lib/api";
import { getSupabase, signInWithProvider } from "@/lib/supabase";

function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const from = search.get("from") || "/admin";
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const hasSupabase = Boolean(getSupabase());

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Primary: local API admin users table (username/password → JWT)
      await login(username, password);
      router.replace(from);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function oauth(provider: "google" | "github") {
    setError("");
    try {
      await signInWithProvider(provider);
    } catch (err) {
      setError(err instanceof Error ? err.message : "OAuth failed");
    }
  }

  async function useSupabaseSession() {
    const sb = getSupabase();
    if (!sb) return;
    const { data } = await sb.auth.getSession();
    const access = data.session?.access_token;
    if (!access) {
      setError("No Supabase session — sign in with a provider first");
      return;
    }
    setToken(access);
    router.replace(from);
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-ink-2/80 p-8 shadow-2xl backdrop-blur">
      <p className="eyebrow text-orange">Admin</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-white">Sign in</h1>
      <p className="mt-2 text-sm text-white/55">
        Local admin (users table) or Supabase Auth providers.
      </p>

      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-orange"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-orange"
            required
          />
        </label>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in with admin account"}
        </button>
      </form>

      {hasSupabase && (
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-wide text-white/40">Supabase Auth</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => oauth("google")}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-orange"
            >
              Google
            </button>
            <button
              type="button"
              onClick={() => oauth("github")}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-orange"
            >
              GitHub
            </button>
            <button
              type="button"
              onClick={useSupabaseSession}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-orange"
            >
              Use active session
            </button>
          </div>
          <p className="mt-3 text-xs text-white/40">
            Enable providers in Supabase → Authentication → Providers. Admin API
            access requires <code className="text-white/60">app_metadata.role = admin</code>.
          </p>
        </div>
      )}
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <Suspense fallback={<p className="text-white/60">Loading…</p>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
