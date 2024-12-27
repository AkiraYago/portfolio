import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Yago Ellen Portfolio",
  description: "Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-c-dblue`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
