import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyway Travel Wayfle deneme",
  description: "Skyway Travel Wayfle deneme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Script
          src="https://wayfle-io-widget.vercel.app/widget.js"
          data-organization-id="org_394LFTJsrpAPUGjWjXmKhjnHhRr"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
