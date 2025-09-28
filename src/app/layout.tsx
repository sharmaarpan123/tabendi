import Progressbar from "@/Providers/Progressbar";
import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/Providers/ModalContext";

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
        <Progressbar>
          <ModalProvider>{children}</ModalProvider>
        </Progressbar>
      </body>
    </html>
  );
}
