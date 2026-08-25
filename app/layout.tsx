import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senotrams — Web Apps, Hosting, Design & Digital Services",
  description:
    "Senotrams delivers web & mobile apps, hosting, social media management, graphics, animation, data analysis, digital marketing and content creation in Tanzania.",
  keywords:
    "Senotrams, web development Tanzania, mobile apps, hosting, domain, VPS, graphic design, digital marketing, social media management, animation, data analysis, content creation, Dar es Salaam",
  openGraph: {
    title: "Senotrams",
    description: "Practical digital services for businesses in Tanzania.",
    type: "website",
    url: "https://senotrams.co.tz",
    images: [{ url: "/images/logo.jpeg" }],
  },
  icons: {
    icon: [
      { url: "/images/logo.jpeg", sizes: "any" },
      { url: "/images/logo.jpeg", type: "image/png", sizes: "32x32" },
      { url: "/images/logo.jpeg", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/images/logo.jpeg", sizes: "180x180" }],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-body bg-paper text-snow antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
