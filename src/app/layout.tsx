import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";
import Providers from "@/components/Providers";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurum Rest — Rest in Aurum. Rise in Light.",
  description:
    "Aurum Rest designs high-end sleep essentials engineered for deeper rest. Discover the Noira Hybrid Mattress and our full collection of luxury sleep essentials.",
  openGraph: {
    title: "Aurum Rest",
    description: "Rest in Aurum. Rise in Light.",
    siteName: "Aurum Rest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6db92413-7072-4335-862a-2d1c71c650e1"
        />
          <Providers>
            {children}
            <VisualEditsMessenger />
          </Providers>
      </body>
    </html>
  );
}
