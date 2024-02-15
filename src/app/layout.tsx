import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/app/_components/footer";
import Navbar from "./_components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Edufree | Slicing",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col justify-between items-stretch ${poppins.className}`}>
        <header className="fixed left-0 top-0 right-0 w-full bg-[#1C1E53] z-50">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
