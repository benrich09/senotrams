import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
  title: "Senotrams Group — Software, AI, Security, Design & Digital Services",
  description:
    "Senotrams Group is a Tanzanian group of six subsidiaries spanning software (Avionics), digital monitoring & gaming (SATI), marketing & print (KIDAINO), AI & data (COGNITA), security & auditing (SENTRYX) and IT infrastructure (NEXORA) — one core, six subsidiaries.",
  keywords:
    "Senotrams, Senotrams Group, Avionics, SATI, KIDAINO, COGNITA, SENTRYX, NEXORA, software development Tanzania, AI data science, cyber security, graphic design, digital marketing, gaming installations, WiFi services, cloud infrastructure, BRELA, RITA, NIDA",
  openGraph: {
    title: "Senotrams Group",
    description: "One core. Six subsidiaries. Every digital need, covered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
