import type { Metadata } from "next";
import { polin, assistant } from "@/lib/fonts";
import { Header } from "@/components/header";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "דפי נחיתה שממירים | Coverty AI · 989₪",
  description:
    "דפי נחיתה מעוצבים ומוכווני המרות לקמפיינים ממומנים. פי 2 המרות, חצי מחיר לליד. על ידי איש שיווק יוצא גוגל.",
  openGraph: {
    title: "דפי נחיתה שממירים | Coverty AI · 989₪",
    description:
      "פי 2 המרות · חצי מחיר לליד · 989₪ בלבד",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "דפי נחיתה שממירים | Coverty AI",
    description: "פי 2 המרות · חצי מחיר לליד · 989₪ בלבד",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${polin.variable} ${assistant.variable} antialiased`}>
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
