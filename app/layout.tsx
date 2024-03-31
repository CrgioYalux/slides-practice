import type { Metadata } from "next";
import { primary } from "@/app/ui/fonts";
import GoToTop from "./ui/components/go-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angela Smith",
  description: "Angela Smith's Personal Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primary.className}>
        {children}
        <GoToTop />
      </body>
    </html>
  );
}
