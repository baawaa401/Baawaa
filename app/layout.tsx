"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/authContaxt";
import Navbar from "./component/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
