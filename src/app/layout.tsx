import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

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
      <body className={`bg-midnightblue dark:bg-regblue flex flex-col min-h-screen relative` }>
        <div className="pointer-events-none fixed inset-0 -z-40 h-full w-full bg-[url('/textures/grainy13.png')] dark:bg-[url('/textures/textureVein5.png')] opacity-20 mix-blend-soft-light"></div>  
        <div className="background-gradient fixed inset-0 -z-50 w-full h-full" />
        <Header />
        <div className="flex flex-col justify-center">
          {children}
        </div>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
