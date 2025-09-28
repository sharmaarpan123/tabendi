import Footer from "@/Components/Common/Footer";
import Header from "@/Components/Common/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafd]">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
