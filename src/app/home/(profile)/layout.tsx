"use client";
import AboutIcon from "@/Components/Common/svg/AboutIcon";
import AppointMentIcon from "@/Components/Common/svg/AppointMentIcon";
import LockIcon from "@/Components/Common/svg/LockIcon";
import PaymentCardIcon from "@/Components/Common/svg/PaymentCardIcon";
import PrivacyPolicyIcon from "@/Components/Common/svg/PrivacyPolicyIcon";
import TermsAndCondition from "@/Components/Common/svg/TermsAndCondition";
import UserIcon from "@/Components/Common/svg/UserIcon";
import WalletIcon from "@/Components/Common/svg/WalletIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  { label: "My Profile", icon: <UserIcon />, href: "/home/profile" },
  {
    label: "Appointments",
    icon: <AppointMentIcon />,
    href: "/home/appointments",
  },
  { label: "Payments", icon: <PaymentCardIcon />, href: "/home/payments" },
  { label: "Wallet", icon: <WalletIcon />, href: "/home/wallet" },
  {
    label: "Change Password",
    icon: <LockIcon />,
    href: "/home/change-password",
  },
  { label: "About Us", icon: <AboutIcon />, href: "#" },
  { label: "Privacy Policy", icon: <PrivacyPolicyIcon />, href: "#" },
  { label: "Terms & Conditions", icon: <TermsAndCondition />, href: "#" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-[#e6e8f3] py-8 px-4 flex flex-col ">
        <nav className="flex-1">
          <ul>
            {sidebarLinks.map((link, idx) => (
              <li key={link.label} className={`mb-2`}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary hover:text-white  ${
                    link.href === pathname
                      ? "bg-primary text-white font-semibold"
                      : "text-[#1a2a4e]"
                  }`}
                >
                  <span className={`text-xl   hover:text-white`}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {link.label === "Language" && (
                    <span className="ml-auto text-xs text-gray-500">Es</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
};

export default Layout;
