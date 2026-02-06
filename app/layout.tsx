import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaseGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wahyu Lamani",
  description: "Portfolio Website Wahyu lamani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SpaseGrotesk.className}>{children}</body>
    </html>
  );
}
