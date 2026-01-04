"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import TwitterIcon from "@/assets/Icon/TwitterIcon";
import FacebookIcon from "@/assets/Icon/FacebookIcon";
import PinterestIcon from "@/assets/Icon/PinterestIcon";
import YouTubeIcon from "@/assets/Icon/YouTubeIcon";
import InstagramIcon from "@/assets/Icon/InstagramIcon";
import LocationIcon from "@/assets/Icon/LocationIcon";
import PhoneIcon from "@/assets/Icon/PhoneIcon";
import EmailIcon from "@/assets/Icon/EmailIcon";
import MenuIcon from "@/assets/Icon/MenuIcon";
import CloseIcon from "@/assets/Icon/CloseIcon";
import ThemeButton from "@/components/ui/ThemeButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },

  { href: "/contact", label: "Contact Us" },
];

const contactInfo = [
  {
    icon: LocationIcon,
    text: "715 W Lake Street, Suite 201, Addison, IL, 60101",
  },
  { icon: EmailIcon, text: "support@tabendihealthcarenetwork.com" },
  { icon: PhoneIcon, text: "630 884 5115" },
];

const socialIcons = [
  { icon: TwitterIcon, label: "Twitter" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: PinterestIcon, label: "Pinterest" },
  { icon: YouTubeIcon, label: "YouTube" },
  { icon: InstagramIcon, label: "Instagram" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full sticky top-0 z-50  "
    >
      {/* Top Bar - Contact Info & Social Media */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border-b border-[#E0E0E0] bg-bg-cream"
      >
        <div className=" container   mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          {/* Contact Information - Left */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-dark">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <IconComponent />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Social Media Icons - Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-opacity"
                >
                  <IconComponent />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
      {/* Bottom Bar - Logo, Navigation, CTA Buttons */}{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white "
      >
        <div className="header-bottom-bg   container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center justify-center rounded-full"
              >
                <Image
                  src="/images/logo.png"
                  alt="Tabendi Healthcare Network Logo"
                  width={90}
                  height={40}
                  className="object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation Links - Center */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium relative ${
                    pathname === link.href
                      ? "text-[] text-primary"
                      : "text-text-dark hover:text-primary"
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="block relative"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden items-center gap-2 lg:flex"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ThemeButton
                variant="primary"
                size="sm"
                className="sm:px-4 sm:py-2.5 sm:text-sm"
                isArrowIcon={true}
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_PATIENT_WEB_URL, "_blank")
                }
              >
                Make Appointment
              </ThemeButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ThemeButton
                variant="secondary"
                size="sm"
                className="sm:px-4 sm:py-2.5 sm:text-sm"
                isArrowIcon={true}
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_DOCTOR_WEB_URL, "_blank")
                }
              >
                Join as Doctor
              </ThemeButton>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center rounded-lg p-2 text-text-dark transition-colors hover:bg-[#FFFBF6] lg:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CloseIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-[#E0E0E0] bg-[#FFFBF6] lg:hidden overflow-hidden"
          >
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors block ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-text-dark hover:text-primary"
                    }`}
                  >
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-2 flex flex-col gap-2 border-t border-[#E0E0E0] pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ThemeButton
                    variant="primary"
                    size="md"
                    fullWidth={true}
                    isArrowIcon={true}
                    className="w-full"
                  >
                    Make Appointment
                  </ThemeButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ThemeButton
                    variant="secondary"
                    size="md"
                    fullWidth
                    isArrowIcon={true}
                  >
                    Join as Doctor
                  </ThemeButton>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
