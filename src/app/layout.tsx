import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Gino Odar",
  description: "Software Developer from Peru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-slate-100 dark:text-slate-900">
      <body className={`${nunitoSans.className} bg-midnightblue dark:bg-regblue ` }>
        <div className="pointer-events-none fixed inset-0 -z-40 h-full w-full bg-[url('/textures/grainy13.png')] dark:bg-[url('/textures/textureVein5.png')] opacity-20 mix-blend-soft-light"></div>  
        <div className="background-gradient fixed inset-0 -z-50 w-full h-full" />
        <Header />
        <div className="flex flex-col justify-center">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
