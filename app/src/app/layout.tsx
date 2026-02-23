import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kora Behavioral Health Services | Phoenix, AZ",
  description:
    "Compassionate, evidence-based behavioral health services in Phoenix, Arizona. Individual therapy, family counseling, crisis support, and more.",
  keywords:
    "behavioral health, therapy, counseling, mental health, Phoenix AZ, Kora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
