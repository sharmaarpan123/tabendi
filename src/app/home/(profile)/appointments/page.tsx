"use client";
import VideoAudioCallModalContent from "@/Components/Common/Modals/Calls/VideoAudioCallModalContent";
import ChatModalContent from "@/Components/Common/Modals/Calls/VideoAudioCallModalContent";
import { useModal } from "@/Providers/ModalContext";
import { dummyUserPlaceHolder } from "@/utils/const";
import Image from "next/image";
import React, { useState } from "react";

const appointments = [
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    date: "July 23, 2025",
    time: "3:30 PM",
    phone: "(406) 555-0120",
    avatar: "/images/doctor.jpg",
    status: "Upcoming",
    videoCall: true,
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    date: "July 23, 2025",
    time: "3:30 PM",
    phone: "(406) 555-0120",
    avatar: "/images/doctor.jpg",
    status: "Upcoming",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    date: "July 23, 2025",
    time: "3:30 PM",
    phone: "(406) 555-0120",
    avatar: "/images/doctor.jpg",
    status: "Upcoming",
  },
];

const tabs = ["Upcoming", "Completed", "Cancelled"];

const Page = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const { openModal } = useModal();

  return (
    <div className="max-w-3xl mx-auto p-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">My Appointments</h2>
        <input
          type="text"
          placeholder="Search by Doctor Name or Specialty..."
          className="border rounded-lg px-4 py-2 text-sm bg-[#f6f8fa] w-[260px]"
        />
      </div>
      <div className="border-b mb-6">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 cursor-pointer  font-medium ${
                activeTab === tab
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-4">
        {appointments
          .filter((a) => a.status === activeTab)
          .map((a, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white border rounded-lg px-4 py-3"
            >
              <div
                className="relative rounded"
                style={{ width: 40, height: 40 }}
              >
                <Image src={dummyUserPlaceHolder} alt={a.doctor} fill />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-400">{a.id}</div>
                <div className="font-semibold">{a.doctor}</div>
                <div className="flex gap-6 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="12" height="10" rx="2" />
                      <path d="M8 2v2" />
                    </svg>
                    {a.date}
                  </span>
                  <span>{a.time}</span>
                  <span className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                    {a.phone}
                  </span>
                </div>
              </div>

              {activeTab === "Upcoming" && (
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium">
                  Cancel
                </button>
              )}
              {a.videoCall && (
                <button
                  onClick={() => openModal(<VideoAudioCallModalContent />)}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-medium"
                >
                  Video Call
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
