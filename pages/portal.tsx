import { useState } from "react";
import Link from "next/link";
import { chatbots } from "../data/chatbots";

const categories = [
  "ทั้งหมด",
  "สวัสดิการ",
  "การจัดซื้อจัดจ้าง",
  "พนักงาน",
  "อื่นๆ",
];

export default function Portal() {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const filteredChatbots =
    selectedCategory === "ทั้งหมด"
      ? chatbots
      : chatbots.filter((bot) => bot.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Chatbot Portal</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chatbot Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChatbots.map((bot, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <div
                className={`p-2 rounded-full ${bot.color} flex items-center justify-center`}
              >
                <bot.icon className="w-6 h-6 text-gray-800" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">
                {bot.name}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">{bot.description}</p>
            {bot.enabled ? (
              <Link href={bot.href}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Go to Chatbot
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
