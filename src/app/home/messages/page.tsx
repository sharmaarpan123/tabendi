"use client";

import { dummyUserPlaceHolder } from "@/utils/const";
import { useState } from "react";

const contacts = [
  {
    name: "Elmer Laverty",
    message: "Haha oh great price🔥",
    avatar: "/images/user1.jpg",
  },
  {
    name: "Florencio Dorrance",
    message: "The principal alcohol in Purell hand sanit...",
    avatar: "/images/user2.jpg",
  },
  {
    name: "Lavern Laboy",
    message: "The study was repeated with three bra...",
    avatar: "/images/user3.jpg",
  },
  // ... add other contacts as needed
];

const messages = [
  {
    sender: "Florencio Dorrance",
    avatar: "/images/user2.jpg",
    online: true,
    chat: [
      { text: "omg, this is amazing", time: "08:54", fromMe: false },
      { text: "perfect! ✅", time: "08:54", fromMe: false },
      { text: "Wow, this is really epic", time: "08:54", fromMe: false },

      { text: "omg, this is amazing", time: "08:54", fromMe: false },
      { text: "perfect! ✅", time: "08:54", fromMe: false },
      { text: "Wow, this is really epic", time: "08:54", fromMe: false },
      { text: "omg, this is amazing", time: "08:54", fromMe: false },
      { text: "perfect! ✅", time: "08:54", fromMe: false },
      { text: "Wow, this is really epic", time: "08:54", fromMe: false },
      { text: "omg, this is amazing", time: "08:54", fromMe: false },
      { text: "perfect! ✅", time: "08:54", fromMe: false },
      { text: "Wow, this is really epic", time: "08:54", fromMe: false },
      { text: "omg, this is amazing", time: "08:54", fromMe: false },
      { text: "perfect! ✅", time: "08:54", fromMe: false },
      { text: "Wow, this is really epic", time: "08:54", fromMe: false },

      { text: "How are you?", time: "08:54", fromMe: true },
      { text: "just ideas for next time", time: "08:54", fromMe: false },
      { text: "I'll be there in 2 mins 🕒", time: "08:54", fromMe: false },
      { text: "woohoooo", time: "08:54", fromMe: true },
      { text: "Haha oh man", time: "08:54", fromMe: true },
      { text: "Haha that's terrifying 😂", time: "08:54", fromMe: true },
      { text: "aww", time: "08:54", fromMe: false },
      { text: "omg, this is amazing", time: "08:54", fromMe: false },
      { text: "woohoooo 🔥", time: "08:54", fromMe: false },
    ],
  },
  // ... add other message threads as needed
];

export default function MessagesPage() {
  const [selected, setSelected] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-[calc(100vh-150px)] border border-primary rounded-xl overflow-hidden bg-white relative">
      {/* Toggle button for sidebar on mobile */}
      <button
        className="md:hidden absolute top-4 left-4 z-20 bg-[#1a2a4e] text-white rounded-full p-2"
        onClick={() => setShowSidebar(true)}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`w-[300px] border-r border-[#e6e8f3] flex flex-col bg-white z-10
          ${showSidebar ? "fixed top-0 left-0 h-full shadow-lg" : ""}
          ${showSidebar ? "block" : "hidden"} md:block`}
        style={{ maxWidth: "90vw" }}
      >
        {/* Close button for mobile sidebar */}
        <button
          className="md:hidden absolute top-4 right-4 z-30 bg-gray-200 rounded-full p-2"
          onClick={() => setShowSidebar(false)}
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
        <div className="p-4 font-semibold text-lg">Messages</div>
        <div className="px-4 pb-2">
          <input
            type="text"
            placeholder="Search by name/message..."
            className="w-full px-3 py-2 rounded-lg border bg-[#f6f8fa] text-sm"
          />
        </div>
        <ul className="flex-1 overflow-y-auto">
          {contacts?.map((contact, idx) => (
            <li
              key={contact.name}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#f6f8fa] ${
                selected === idx ? "bg-[#e6e8f3]" : ""
              }`}
              onClick={() => {
                setSelected(idx);
                setShowSidebar(false); // Close sidebar on mobile after selecting
              }}
            >
              <img
                src={dummyUserPlaceHolder}
                alt={contact?.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{contact?.name}</div>
                <div className="text-xs text-gray-500 truncate max-w-[180px]">
                  {contact.message}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      {/* Overlay for mobile sidebar */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-0 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      {/* Chat Area */}
      <section className="flex-1 flex flex-col">
        <div className="flex  items-center justify-between px-2">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#e6e8f3]">
            <img
              src={dummyUserPlaceHolder}
              alt={messages[selected]?.sender}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold">{messages[selected]?.sender}</div>
              <div className="text-xs text-green-500">● Online</div>
            </div>
          </div>
          {/* <div className=" flex gap-2 z-50">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => setCallModal("incoming")}
            >
              Video call
            </button>
            <button
              className="bg-green-500 text-white px-3 py-1 rounded"
              onClick={() => setCallModal("active")}
            >
              Audio Call
            </button>
          </div> */}
        </div>
        <div className="flex-1 px-6 py-4 overflow-y-auto flex flex-col gap-2">
          {messages[selected]?.chat?.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[60%] px-4 py-2 rounded-2xl text-sm ${
                  msg.fromMe
                    ? "bg-primary text-white"
                    : "bg-[#f6f8fa] text-gray-800"
                }`}
              >
                {msg.text}
                <div className="text-[10px] text-gray-400 mt-1 text-right">
                  {msg.time}
                </div>
              </div>
              {msg.fromMe && (
                <img
                  src={dummyUserPlaceHolder}
                  alt="Me"
                  className="h-7 w-7 rounded-full object-cover ml-2"
                />
              )}
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-[#e6e8f3] flex items-center gap-3">
          <input
            type="text"
            placeholder="Typing a message"
            className="flex-1 px-4 py-2 rounded-full border bg-[#f6f8fa] text-sm"
          />
          <button className="bg-[#1a2a4e] text-white rounded-full p-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </section>
      {/* Example trigger buttons for demo */}
    </div>
  );
}
