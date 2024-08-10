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
      <body className={`${nunitoSans.className} bg-midnightblue dark:bg-regblue flex flex-col justify-center` }>
        <Header />
        <div className="-mt-20 lg:-mt-28 xl:-mt-56">
          {children}  
        </div>
        <Footer />
      </body>
    </html>
  );
}
