"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const bare = path.startsWith("/admin") || path.startsWith("/login");

  if (bare) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
