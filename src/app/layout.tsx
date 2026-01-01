import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Tabendi HealthCare",
  description: "Tabendi Healthcare Network - Your trusted healthcare partner",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-right" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
