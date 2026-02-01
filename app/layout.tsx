import type { Metadata } from "next";
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
      <head>
        <script
          src="https://wayfle-io-widget.vercel.app/widget.js"
          data-organization-id="org_394TLxpfGKksYnLKAAaoWxr3O3r"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
