import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black mt-8">
      <div className="container mx-auto py-8 px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="relative w-[150px] h-[45px]">
              <Image
                src="/images/logo.png"
                className="position object-contain"
                fill
                alt="Logo"
              />
            </div>
          </div>
          <p className="mb-4">
            Booking medical appointments has never been this simple.
          </p>
        </div>
        {/* <div>
          <h4 className="font-semibold mb-2">Specialties</h4>
          <ul>
            <li>Orthopedics</li>
            <li>Neurology</li>
            <li>Hematologist</li>
            <li>Dentists</li>
          </ul>
        </div> */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/book-appointment" className="hover:underline">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <ul>
            <li>715 W Lake Street, Suite 201, Addison, IL, 60101</li>
            <li>630 884 5115</li>
            <li>support@tabendihealthcarenetwork.com</li>
            <li>Mon-Fri: 8:00 AM - 8:00 PM</li>
            <li>Sat-Sun: 9:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>
      <div className=" bg-primary container mx-auto px-6 pb-4 flex flex-col text-white md:flex-row justify-between items-center border-t border-white/20 pt-4">
        <div>
          <span>© 2025 tabendi. All Right Reserved.</span>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
