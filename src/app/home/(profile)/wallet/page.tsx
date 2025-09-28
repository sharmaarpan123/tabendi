"use client";
import ThemeButton from "@/Components/ui/Button/ThemeButton";
import React from "react";

const transactions = [
  {
    id: 1,
    desc: "Paid to account ending in 4478",
    date: "December 01, 2024 - Sat",
    time: "08:12PM",
    amount: -20,
  },
  {
    id: 2,
    desc: "Paid to account ending in 4478",
    date: "December 01, 2024 - Sat",
    time: "08:12PM",
    amount: 520,
  },
  {
    id: 3,
    desc: "Paid to account ending in 4478",
    date: "December 01, 2024 - Sat",
    time: "08:12PM",
    amount: -20,
  },
  {
    id: 4,
    desc: "Paid to account ending in 4478",
    date: "December 01, 2024 - Sat",
    time: "08:12PM",
    amount: 520,
  },
  {
    id: 5,
    desc: "Paid to account ending in 4478",
    date: "December 01, 2024 - Sat",
    time: "08:12PM",
    amount: -20,
  },
  {
    id: 6,
    desc: "Paid to account ending in 4478",
    date: "December 01, 2024 - Sat",
    time: "08:12PM",
    amount: 520,
  },
];

const Wallet = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 border-2 border-primary rounded-lg p-8 bg-white">
      <h2 className="text-xl font-semibold mb-6">Wallet</h2>
      <div className="mb-8">
        <div className="bg-gradient-to-r  from-[#f6f8fa] to-[#e6e8f3] rounded-xl p-8 flex justify-between items-center">
          <div>
            <div className="text-gray-500 mb-2">Available Balance</div>
            <div className="text-4xl font-bold">$2697.05</div>
          </div>
          <div>
            <ThemeButton variant="primary">Withdraw</ThemeButton>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {transactions.map((tx, idx) => (
            <div
              key={tx.id}
              className="bg-[#f6f8fa] rounded-lg p-4 flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                <div className="bg-white rounded-full p-2 border border-[#e6e8f3]">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="#1a2a4e"
                    strokeWidth="2"
                  >
                    <rect x="8" y="12" width="16" height="12" rx="2" />
                    <path d="M16 8v4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-medium">{tx.desc}</div>
                <div className="text-xs text-gray-500">
                  {tx.date} &nbsp;|&nbsp; {tx.time}
                </div>
              </div>
              <div
                className={`font-semibold text-lg ${
                  tx.amount > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
