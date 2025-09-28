import ThemeButton from "@/Components/ui/Button/ThemeButton";
import { useModal } from "@/Providers/ModalContext";
import { dummyUserPlaceHolder } from "@/utils/const";
import Image from "next/image";
import { useState } from "react";

const EditProfileModal = ({
  user,
}: {
  user: {
    name: string;
    email: string;
    phone: string;
    dob: string;
    city: string;
    state: string;
    avatar: string;
  };
}) => {
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    dob: user.dob,
    city: user.city,
    state: user.state,
  });

  const { closeModal } = useModal();

  return (
    <div className="bg-white rounded-xl p-8 w-[500px] max-w-full relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={closeModal}
      >
        &#10005;
      </button>
      <div className="flex justify-center mb-8 ">
        <Image
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full object-cover"
          src={dummyUserPlaceHolder}
        />
      </div>

      <div className="border-2 border-primary  rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Ex.Hello@docturno.com"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 pr-10"
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
              />
              <span className="absolute right-3 top-2 text-gray-400">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="14" height="12" rx="2" />
                  <path d="M8 2v2M12 2v2" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">City</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">State</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <ThemeButton variant="primary" onClick={closeModal}>
          Update Profile
        </ThemeButton>
      </div>
    </div>
  );
};

export default EditProfileModal;
