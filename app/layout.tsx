import "./globals.css";

import type { Metadata } from "next";
import { primary } from "@/app/ui/fonts";
import GoToTop from "@/app/ui/components/go-to-top";
import ThemeProvider from "@/app/lib/providers/theme";
import HorizontalUpperBar from "./ui/layouts/horizontal-upper-bar";

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
      <body className={`${primary.className} bg-white text-black dark:bg-black dark:text-white`}>
        <ThemeProvider>
          <HorizontalUpperBar />
          {children}
          <GoToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
