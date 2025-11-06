import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Plamoottils Next.js Portfolio",
  description: "John Plamoottils Modern Portfolio",
  keywords: "software, engineer, developer, web, portfolio, resume, career",
  authors: { name: "John Plamoottil" },
  creator: "John Plamoottil",
  publisher: "John Plamoottil",
  openGraph: {
    images: {
      url: "/Hero.png",
      width: 1903,
      height: 997,
    },
    title: "John Plamoottils Next.js Portfolio",
    description: "John Plamoottils Modern Portfolio",
    url: "/",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
