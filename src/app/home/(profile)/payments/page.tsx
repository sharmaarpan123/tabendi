"use client";
import React, { useState } from "react";

const initialCards = [
  {
    id: 1,
    brand: "Visa",
    number: "**** **** **** 1234",
    name: "Jenny Wilson",
    expiry: "08/26",
  },
  {
    id: 2,
    brand: "Mastercard",
    number: "**** **** **** 5678",
    name: "Jenny Wilson",
    expiry: "11/27",
  },
];

const Page = () => {
  const [cards, setCards] = useState(initialCards);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add Card Card */}
        <div className="border-2 border-dashed border-primary rounded-lg flex flex-col items-center justify-center p-8 bg-white cursor-pointer hover:bg-[#f6f8fa]">
          <button className="flex flex-col items-center text-primary">
            <span className="text-4xl  mb-2">+</span>
            <span className="font-medium ">Add Card</span>
          </button>
        </div>
        {/* List of Cards */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white border rounded-lg p-6 flex flex-col gap-3 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{card.brand}</span>
              <button className="text-red-500 text-sm hover:underline">
                Remove
              </button>
            </div>
            <div className="text-xl font-mono tracking-widest">
              {card.number}
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{card.name}</span>
              <span>Exp: {card.expiry}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
