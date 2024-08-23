import type { Metadata } from "next";
import { Great_Vibes,Urbanist as FontSans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import { Navbar } from "@/components/nav-bar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { MobileNav } from "@/components/responsive-nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontGreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
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
          "relative min-h-screen bg-background font-sans antialiased",
          fontSans.variable,fontGreatVibes.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <nav className="sticky top-0 z-50 sm:hidden h-0">
            <MobileNav />
          </nav>
          <main>{children}</main>
          <Footer />
          <Toaster richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
