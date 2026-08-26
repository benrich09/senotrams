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
  title: {
    default: "Senotrams",
    template: "%s | Senotrams",
  },
  description:
    "Senotrams delivers software development, hosting, design, animation, data analysis, digital marketing and content creation in Tanzania.",
  keywords:
    "Senotrams, software development Tanzania, web apps, mobile apps, hosting, domain, VPS, graphic design, digital marketing, content creation, Dar es Salaam",
  openGraph: {
    title: "Senotrams",
    description: "Practical digital services for businesses in Tanzania.",
    type: "website",
    url: "https://senotrams.co.tz",
    siteName: "Senotrams",
    images: [{ url: "/images/logo-round.png", width: 512, height: 512, alt: "Senotrams" }],
  },
  twitter: {
    card: "summary",
    title: "Senotrams",
    description: "Practical digital services for businesses in Tanzania.",
    images: ["/images/logo-round.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  metadataBase: new URL("https://senotrams.co.tz"),
  robots: { index: true, follow: true },
  alternates: { canonical: "https://senotrams.co.tz" },
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
