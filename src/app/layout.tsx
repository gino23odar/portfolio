import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
  }
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-slate-100 dark:text-slate-900">
      <body className={`bg-midnightblue dark:bg-regblue flex flex-col min-h-screen relative` }>
        <div className="pointer-events-none fixed inset-0 -z-40 h-full w-full bg-[url('/textures/grainy13.png')] dark:bg-[url('/textures/textureVein5.png')] opacity-20 mix-blend-soft-light"></div>  
        <div className="background-gradient fixed inset-0 -z-50 w-full h-full" />
        <Header />
        {modal}
        <div className="flex flex-col justify-center overflow-hidden">
          {children}
        </div>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
