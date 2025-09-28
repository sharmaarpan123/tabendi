import StatUserIcon from "@/Components/Common/svg/StatUserIcon";
import { dummyUserPlaceHolder } from "@/utils/const";
import Image from "next/image";
import React from "react";

const stats = [
  {
    label: "Appointments Today",
    value: 126,
    change: "+40% From Yesterday",
    icon: <StatUserIcon />,
    changeColor: "text-green-500",
  },
  {
    label: "Appointments Booked",
    value: 126,
    change: "+40% From Last Week",
    icon: <StatUserIcon />,
    changeColor: "text-green-500",
  },
  {
    label: "New Patients",
    value: 126,
    change: "-40% From Yesterday",
    icon: <StatUserIcon />,
    changeColor: "text-red-500",
  },
];

const appointments = [
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Teleconsultation",
    avatar: "/images/doctor.jpg",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Teleconsultation",
    avatar: "/images/doctor.jpg",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Teleconsultation",
    avatar: "/images/doctor.jpg",
  },
  {
    id: "#Doc2365485",
    doctor: "Dr. William Smith",
    date: "July 23, 2025",
    time: "3:30 PM",
    type: "Teleconsultation",
    avatar: "/images/doctor.jpg",
  },
];

const notifications = [
  {
    message: "Booking Confirmed on 21 Mar 2024 10:30 AM",
    time: "Just Now",
  },
  {
    message: "Booking Confirmed on 21 Mar 2024 10:30 AM",
    time: "Just Now",
  },
  {
    message: "Booking Confirmed on 21 Mar 2024 10:30 AM",
    time: "Just Now",
  },
  {
    message: "Booking Confirmed on 21 Mar 2024 10:30 AM",
    time: "Just Now",
  },
  {
    message: "Booking Confirmed on 21 Mar 2024 10:30 AM",
    time: "Just Now",
  },
];

const messages = [
  {
    name: "Jacob Jones",
    text: "Yeah! You're right...",
    time: "12:00AM",
    avatar: "/images/user1.jpg",
    unread: true,
  },
  {
    name: "Jacob Jones",
    text: "Yeah! You're right...",
    time: "12:00AM",
    avatar: "/images/user1.jpg",
    unread: false,
  },
  {
    name: "Jacob Jones",
    text: "Yeah! You're right...",
    time: "12:00AM",
    avatar: "/images/user2.jpg",
    unread: false,
  },
  {
    name: "Jacob Jones",
    text: "Yeah! You're right...",
    time: "12:00AM",
    avatar: "/images/user3.jpg",
    unread: false,
  },
  {
    name: "Jacob Jones",
    text: "Yeah! You're right...",
    time: "12:00AM",
    avatar: "/images/user4.jpg",
    unread: false,
  },
];

const page = () => {
  return (
    <div className="bg-[#f6f8fa] min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm"
          >
            <div className="bg-[#e6e8f3] rounded-lg p-3 text-primary">
              {stat.icon}
            </div>
            <div>
              <div className="text-xs text-gray-500">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={`text-xs mt-1 ${stat.changeColor}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* My Appointments */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">My Appointments</h3>
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
          <div>
            {appointments.map((a, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-4 border-b last:border-b-0 py-3"
              >
                <Image
                  src={dummyUserPlaceHolder}
                  alt={a.doctor}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="text-xs text-gray-400">{a.id}</div>
                  <div className="font-semibold">{a.doctor}</div>
                  <div className="flex gap-3 mt-1 text-sm text-gray-500 items-center">
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
                      {a.type}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#e6e8f3] p-2 rounded-lg">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#2196f3"
                      strokeWidth="2"
                    >
                      <path d="M5 9l4 4L17 7" />
                    </svg>
                  </button>
                  <button className="bg-[#e6e8f3] p-2 rounded-lg">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#f44336"
                      strokeWidth="2"
                    >
                      <path d="M6 6l6 6M6 12L12 6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Next Appointment */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div className="mb-4">
            <div className="font-semibold mb-2">Next Appointment</div>
            <div className="bg-primary rounded-xl p-4 flex flex-col md:flex-row items-center gap-4">
              <Image
                src={dummyUserPlaceHolder}
                alt="Esther Howard"
                width={80}
                height={80}
                className=" rounded-full object-cover border-4 border-white"
              />
              <div className="flex-1 text-white">
                <div className="font-semibold text-lg">Esther Howard</div>
                <div className="text-sm">General Checkup</div>
                <div className="flex gap-2 items-center mt-1 text-xs">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="12" height="10" rx="2" />
                    <path d="M8 2v2" />
                  </svg>
                  July 23, 2025 | 3:30 PM
                </div>
              </div>
              <button className="bg-white text-[#2196f3] px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                Start Appointment
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#2196f3"
                  strokeWidth="2"
                >
                  <path d="M5 8h6M11 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Notifications & Messages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Notifications</h3>
            <button className="text-primary text-sm font-medium">
              View All
            </button>
          </div>
          <div>
            {notifications.map((n, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-b last:border-b-0 py-3"
              >
                <span className="bg-primary rounded-full h-3 w-3 mr-2"></span>
                <div className="flex-1">
                  <div className="font-medium">{n.message}</div>
                  <div className="text-xs text-gray-400">{n.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Recent Messages</h3>
            <button className="text-[#2196f3] text-sm font-medium">
              View All
            </button>
          </div>
          <div>
            {messages.map((m, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-b last:border-b-0 py-3"
              >
                <Image
                  src={dummyUserPlaceHolder}
                  alt={m.name}
                  width={40}
                  height={40}
                  className=" rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.text}</div>
                </div>
                <div className="text-xs text-gray-400">{m.time}</div>
                {m.unread && (
                  <span className="bg-primary text-white rounded-full px-2 py-1 text-xs ml-2">
                    2
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
