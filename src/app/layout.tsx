import type { Metadata } from "next";
import { Urbanist as FontSans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Into Being",
  description: "Recruitment Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main className={""}>{children}</main>
      </body>
    </html>
  );
}
