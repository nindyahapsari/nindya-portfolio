import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";
import "./globals.css";

const poppins = Poppins({ weight: ["300", "400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nindya | Portfolio",
  description: "Nindya's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
