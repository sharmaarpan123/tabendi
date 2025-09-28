import { useModal } from "@/Providers/ModalContext";
import { dummyUserPlaceHolder } from "@/utils/const";
import Image from "next/image";
import React from "react";

const VideoAudioCallModalContent = () => {
  const { closeModal } = useModal();
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
        <div className="bg-white rounded-xl p-8 flex flex-col items-center w-[350px]">
          <div className="border-4 border-[#e6e8f3] rounded-2xl p-2 mb-4">
            <Image
              src={dummyUserPlaceHolder}
              alt="Dr. William Smith"
              width={180}
              height={180}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="font-semibold text-lg mb-6">Dr. William Smith</div>
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
              Accept
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
              Reject
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-30">
        <div className="flex gap-8 mb-8">
          <div className="bg-gradient-to-br from-[#f6f8fa] to-[#e6e8f3] rounded-2xl p-6 flex flex-col items-center w-[220px]">
            <div className="border-4 border-[#e6e8f3] rounded-2xl p-2 mb-2">
              <Image
                src={dummyUserPlaceHolder}
                alt="User"
                width={100}
                height={100}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="font-medium text-center">Dr. William Smith</div>
          </div>
          <div className="bg-gradient-to-br from-[#f6f8fa] to-[#e6e8f3] rounded-2xl p-6 flex flex-col items-center w-[220px]">
            <div className="border-4 border-[#e6e8f3] rounded-2xl p-2 mb-2">
              <Image
                src={dummyUserPlaceHolder}
                alt="Dr. William Smith"
                width={100}
                height={100}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="font-medium text-center">Dr. William Smith</div>
          </div>
        </div>
        <div className="bg-white rounded-xl px-8 py-4 flex items-center gap-8 w-[500px] justify-between">
          <span className="text-lg font-medium">00:24:54</span>
          <div className="flex gap-4">
            <button className="bg-[#f6f8fa] p-2 rounded-full">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#1a2a4e"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <rect x="9" y="9" width="6" height="6" rx="1" fill="#1a2a4e" />
              </svg>
            </button>
            <button className="bg-[#f6f8fa] p-2 rounded-full">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#1a2a4e"
                strokeWidth="2"
              >
                <path d="M12 18v-6" />
                <circle cx="12" cy="8" r="2" />
              </svg>
            </button>
            <button className="bg-[#f6f8fa] p-2 rounded-full">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#1a2a4e"
                strokeWidth="2"
              >
                <path d="M18 12a6 6 0 1 1-12 0" />
              </svg>
            </button>
          </div>
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
            onClick={() => closeModal()}
          >
            End Call
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoAudioCallModalContent;
