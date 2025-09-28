"use client";
import EditProfileModal from "@/Components/Common/Modals/EditProfileModal";
import EditIcon from "@/Components/Common/svg/EditIcon";

import { useModal } from "@/Providers/ModalContext";
import { dummyUserPlaceHolder } from "@/utils/const";
import Image from "next/image";

const user = {
  name: "Jenny Wilson",
  email: "jenny.wilson@gmail.com",
  phone: "(406) 555-0120",
  dob: "July 18, 1996",
  city: "Naperville",
  state: "Illinois",
  avatar: "/images/user1.jpg",
};

const Page = () => {
  const { openModal } = useModal();
  return (
    <div className="max-w-4xl mx-auto mt-8 border-2 border-primary rounded-lg p-8 bg-white">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold">My Profile</h2>
        <button
          className="cursor-pointer flex items-center gap-2  px-4 py-2 rounded-lg  font-medium border border-primary text-primary"
          onClick={() => openModal(<EditProfileModal user={user} />)}
        >
          <EditIcon />
        </button>
      </div>
      <div className="flex gap-8 items-center">
        <Image
          src={dummyUserPlaceHolder}
          alt={user.name}
          width={50}
          height={50}
          className="h-24 w-24 rounded-full object-cover border-4 border-[#e6e8f3]"
        />
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 w-full">
          <div>
            <div className="text-xs text-gray-500">Name</div>
            <div className="font-semibold">{user.name}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Email Address</div>
            <div className="font-semibold">{user.email}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Phone Number</div>
            <div className="font-semibold">{user.phone}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Date of Birth</div>
            <div className="font-semibold">{user.dob}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">City</div>
            <div className="font-semibold">{user.city}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">State</div>
            <div className="font-semibold">{user.state}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
