import ThemeButton from "@/Components/ui/Button/ThemeButton";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#f6f8fa]">
      <div className="max-w-5xl mx-auto ">
        <div>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <div className="text-sm text-gray-500">Home / Contact Us</div>
        </div>
        <div className="flex justify-end">
          <div className="relative  w-[250px] h-[250px]">
            <Image
              src="/images/doctorWithPatientFamily.png"
              alt="Doctors"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row gap-8 ">
          {/* Contact Info */}
          <div className="bg-primary rounded-lg p-6 text-white flex-1 max-w-[320px]">
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p className="text-sm mb-6">
              We’re here to help! For questions or assistance, feel free to
              reach out and contact us anytime.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="9" r="8" />
                  <path d="M9 13v-4" />
                </svg>
                <span>jenny.wilson@docturno.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M2 2l14 14M2 16L16 2" />
                </svg>
                <span>+91 7986709965</span>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex-1 grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                First Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                defaultValue="Dr. William"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                defaultValue="Smith"
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm text-gray-700 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Ex.Hello@docturno.com"
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm text-gray-700 mb-1 block">
                Message
              </label>
              <textarea
                className="w-full border rounded-lg px-3 py-2"
                rows={4}
                placeholder="Write a message..."
              />
            </div>
            <div className="col-span-2 flex justify-end mt-2">
              <div>
                <ThemeButton variant="primary">Submit</ThemeButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
