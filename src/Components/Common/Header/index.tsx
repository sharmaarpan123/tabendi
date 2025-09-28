"use client";
import Image from "next/image";
import BookAppointment from "../Modals/BookAppointment";
import { useModal } from "@/Providers/ModalContext";
import ThemeButton from "@/Components/ui/Button/ThemeButton";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const { openModal } = useModal();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white shadow relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-2">
          <Link href={"/home"} className="relative w-[150px] h-[45px]">
            <Image
              src="/images/logo.png"
              className="position object-contain"
              fill
              alt="Logo"
            />
          </Link>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden block text-[#1a2a4e] p-2 rounded-full"
          onClick={() => setShowMenu(true)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 7h18M5 14h18M5 21h18" />
          </svg>
        </button>
        {/* Desktop navigation and appointment button */}
        <nav className="hidden md:flex gap-6">
          <Link href="/home/contact" className="text-[#1a2a4e] hover:underline">
            Contact Us
          </Link>
          <Link
            href="/home/messages"
            className="text-[#1a2a4e] hover:underline"
            onClick={() => setShowMenu(false)}
          >
            Messages
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ThemeButton
            variant="primary"
            onClick={() => openModal(<BookAppointment />)}
          >
            Appointment
          </ThemeButton>
          <Link href="/home/profile">
            <div className="relative hidden md:block ">
              <Image
                src="/images/dummyUserPlaceholder.jpg"
                alt="User"
                className="rounded-full h-10 w-10 object-cover"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setShowMenu(false)}
          />
          <div className="fixed top-0 left-0 w-[80vw] max-w-[350px] h-full bg-white z-50 shadow-lg flex flex-col">
            <button
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2"
              onClick={() => setShowMenu(false)}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l8 8M6 14L14 6" />
              </svg>
            </button>
            <nav className="flex flex-col gap-6 mt-16 px-8">
              <Link
                href="/contact"
                className="text-[#1a2a4e] hover:underline"
                onClick={() => setShowMenu(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/home/messages"
                className="text-[#1a2a4e] hover:underline"
                onClick={() => setShowMenu(false)}
              >
                Messages
              </Link>
            </nav>
            <div className="flex flex-col items-start gap-4 px-8 mt-8">
              <ThemeButton
                variant="primary"
                onClick={() => {
                  openModal(<BookAppointment />);
                  setShowMenu(false);
                }}
              >
                Appointment
              </ThemeButton>
              <div className="relative hidden md:block ">
                <Image
                  src="/images/dummyUserPlaceholder.jpg"
                  alt="User"
                  className="rounded-full min-h-10 max-h-10 max-w-10 min-w-10 object-cover"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
