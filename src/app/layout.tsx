import CommonProvider from "@/Providers";
import type { Metadata } from "next";
import "./globals.css";
import "react-phone-input-2/lib/style.css";

export const metadata: Metadata = {
  title: "Tabendi HealthCare",
  description: "Tabendi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CommonProvider>{children}</CommonProvider>
      </body>
    </html>
  );
}
