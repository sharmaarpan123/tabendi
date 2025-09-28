"use client";
import ThemeButton from "@/Components/ui/Button/ThemeButton";
import { dummyUserPlaceHolder } from "@/utils/const";
import Image from "next/image";
import React, { useState } from "react";

const tabs = [
  { label: "Upcoming", count: 6 },
  { label: "Completed", count: 216 },
  { label: "Cancelled", count: 20 },
];

const appointments = [
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    avatar: "/images/doctor.jpg",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Video Call",
    visit: "General Visit",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    avatar: "/images/doctor.jpg",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Video Call",
    visit: "General Visit",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    avatar: "/images/doctor.jpg",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Video Call",
    visit: "General Visit",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    avatar: "/images/doctor.jpg",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Video Call",
    visit: "General Visit",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    avatar: "/images/doctor.jpg",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Video Call",
    visit: "General Visit",
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">My Appointments</h2>
      <div className="bg-white rounded-xl shadow p-6">
        {/* Filters and Actions */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button className="bg-[#f6f8fa] px-4 py-2 rounded-lg border text-sm flex items-center gap-2">
              Today
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#1a2a4e"
                strokeWidth="2"
              >
                <path d="M6 10l4 4 4-4" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-4 py-2 text-sm bg-[#f6f8fa] w-[160px]"
            />
          </div>
          <div className="flex gap-2 ml-auto">
            <div className="bg-white border rounded-lg px-4 py-2 text-sm flex items-center gap-2">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#1a2a4e"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="12" height="10" rx="2" />
                <path d="M8 2v2" />
              </svg>
              09/10/2025 - 09/20/2025
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="border-b mb-4 flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`py-2 font-medium border-b-2 ${
                activeTab === tab.label
                  ? "border-[#1a2a4e] text-[#1a2a4e]"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label} <span className="font-semibold">{tab.count}</span>
            </button>
          ))}
        </div>
        {/* Appointment Cards */}
        <div className="flex flex-col gap-4">
          {appointments.map((a, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-4 bg-[#f6f8fa] rounded-lg px-4 py-3"
            >
              <Image
                src={dummyUserPlaceHolder}
                alt={"user"}
                width={40}
                height={40}
                className=" rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-xs text-gray-400">{a.id}</div>
                <div className="font-semibold">{a.doctor}</div>
                <div className="flex gap-6 mt-1 text-sm text-gray-500 items-center">
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
                  <span className="bg-[#e6e8f3] text-[#1a2a4e] px-2 py-1 rounded text-xs font-medium">
                    {a.visit}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <div className="text-xs text-gray-500">Type of Appointment</div>
                <div className="font-semibold">{a.type}</div>
              </div>
              <div>
                <ThemeButton variant="primary" classNames="whitespace-nowrap">
                  <p className="whitespace-nowrap">
                    Start Appointment
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M5 8h6M11 4l4 4-4 4" />
                    </svg>
                  </p>
                </ThemeButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
