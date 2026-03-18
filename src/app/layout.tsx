import type { Metadata } from "next";
import { assistant } from "@/lib/fonts";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "דפי נחיתה שממירים | 989 ש״ח בלבד",
  description:
    "דפי נחיתה מעוצבים ומוכווני המרות לקמפיינים ממומנים. פי 2 המרות, חצי מחיר לליד. על ידי איש שיווק יוצא גוגל.",
  openGraph: {
    title: "דפי נחיתה שממירים | 989 ש״ח בלבד",
    description:
      "דפי נחיתה מעוצבים ומוכווני המרות לקמפיינים ממומנים. פי 2 המרות, חצי מחיר לליד.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
