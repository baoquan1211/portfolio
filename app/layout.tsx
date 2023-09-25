import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "quan-qb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fira.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
