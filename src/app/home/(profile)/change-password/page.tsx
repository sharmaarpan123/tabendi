"use client";
import ThemeButton from "@/Components/ui/Button/ThemeButton";
import React, { useState } from "react";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white border rounded-lg p-8">
      <h2 className="text-lg font-semibold mb-1">Change Password</h2>
      <p className="text-sm text-gray-500 mb-6">
        Create a new password to login into your account.
      </p>
      <form className="flex flex-col gap-5">
        <div>
          <label className="text-sm text-gray-700 mb-1 block">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              className="w-full border rounded-lg px-3 py-2 pr-10"
              value={form.current}
              onChange={(e) => setForm({ ...form, current: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-400"
              onClick={() => setShowCurrent(!showCurrent)}
              tabIndex={-1}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="10" cy="10" r="8" />
                <circle cx="10" cy="10" r="3" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-700 mb-1 block">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              className="w-full border rounded-lg px-3 py-2 pr-10"
              value={form.new}
              onChange={(e) => setForm({ ...form, new: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-400"
              onClick={() => setShowNew(!showNew)}
              tabIndex={-1}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="10" cy="10" r="8" />
                <circle cx="10" cy="10" r="3" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-700 mb-1 block">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              className="w-full border rounded-lg px-3 py-2 pr-10"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-400"
              onClick={() => setShowConfirm(!showConfirm)}
              tabIndex={-1}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="10" cy="10" r="8" />
                <circle cx="10" cy="10" r="3" />
              </svg>
            </button>
          </div>
        </div>
        <ThemeButton type="submit" variant="primary">
          Update Password
        </ThemeButton>
      </form>
    </div>
  );
};

export default ChangePassword;
