const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("senotrams_token");
}

export function setToken(token: string) {
  localStorage.setItem("senotrams_token", token);
  document.cookie = `senotrams_token=${token}; path=/; max-age=${60 * 60 * 24}; SameSite=Lax`;
}

export function clearToken() {
  localStorage.removeItem("senotrams_token");
  document.cookie = "senotrams_token=; path=/; max-age=0";
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || res.statusText || "Request failed");
  }
  return res.json();
}

export async function login(username: string, password: string) {
  const data = await apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  setToken(data.token);
  return data;
}
