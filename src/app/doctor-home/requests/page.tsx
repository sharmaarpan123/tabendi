"use client";
import { dummyUserPlaceHolder } from "@/utils/const";
import Image from "next/image";
import React from "react";

const requests = [
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

const page = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Requests</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex-1 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by Doctor Name or Specialty..."
              className="border rounded-lg px-4 py-2 text-sm bg-[#f6f8fa] w-full md:w-[320px]"
            />
          </div>
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
        </div>
        <div className="flex flex-col gap-4">
          {requests.map((r, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#f6f8fa] rounded-lg px-4 py-3"
            >
              <Image
                src={dummyUserPlaceHolder}
                alt="user"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-xs text-gray-400">{r.id}</div>
                <div className="font-semibold">{r.doctor}</div>
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
                    {r.date}
                  </span>
                  <span>{r.time}</span>
                  <span className="bg-[#e6e8f3] text-[#1a2a4e] px-2 py-1 rounded text-xs font-medium">
                    {r.visit}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <div className="text-xs text-gray-500">Type of Appointment</div>
                <div className="font-semibold">{r.type}</div>
              </div>
              <div className="flex gap-4">
                <button className="text-green-600 font-semibold hover:underline">
                  ✓ Accept
                </button>
                <button className="text-red-500 font-semibold hover:underline">
                  ✗ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
