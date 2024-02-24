import type { Metadata } from "next";
import { Urbanist as FontSans } from "next/font/google";
import "./globals.css";
import "animate.css/animate.compat.css"
import { Navbar } from "@/components/nav-bar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

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
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
