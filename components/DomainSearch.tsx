"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const TLDS = [".com", ".co.tz", ".tz", ".net", ".org", ".io"];

export default function DomainSearch() {
  const [q, setQ] = useState("");
  const [checked, setChecked] = useState(false);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    setChecked(true);
  }

  const base = q.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");

  return (
    <div className="rounded-2xl border border-line-light bg-paper-2 p-5">
      <form onSubmit={onSearch} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setChecked(false);
          }}
          placeholder="yourbrand"
          className="flex-1 rounded-xl border border-line bg-paper px-4 py-3 text-sm text-snow outline-none focus:border-orange"
        />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-5 py-3 text-sm font-semibold text-ink">
          <Search size={16} />
          Search
        </button>
      </form>
      {checked && base && (
        <ul className="mt-4 space-y-2">
          {TLDS.map((tld) => (
            <li key={tld} className="flex items-center justify-between rounded-lg border border-line-light bg-paper px-3 py-2 text-sm">
              <span className="font-mono text-snow">
                {base}
                {tld}
              </span>
              <span className="text-xs text-slate">We will verify &amp; register for you</span>
            </li>
          ))}
        </ul>
      )}
      {!base && checked && <p className="mt-3 text-sm text-slate">Enter a name to check common extensions.</p>}
    </div>
  );
}
