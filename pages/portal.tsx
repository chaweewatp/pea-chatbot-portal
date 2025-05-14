// import { useState } from "react";
// import Link from "next/link";
// import { chatbots } from "../data/chatbots";

// const categories = [
//   "ทั้งหมด",
//   "สวัสดิการ",
//   "การจัดซื้อจัดจ้าง",
//   "พนักงาน",
//   "อื่นๆ",
// ];

// export default function Portal() {
//   const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

//   const filteredChatbots =
//     selectedCategory === "ทั้งหมด"
//       ? chatbots
//       : chatbots.filter((bot) => bot.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">Chatbot Portal</h1>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-full border ${
//               selectedCategory === cat
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Chatbot Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredChatbots.map((bot, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//           >
//             <div className="flex items-center mb-4">
//               <div
//                 className={`p-2 rounded-full ${bot.color} flex items-center justify-center`}
//               >
//                 <bot.icon className="w-6 h-6 text-gray-800" />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800 ml-3">
//                 {bot.name}
//               </h2>
//             </div>
//             <p className="text-gray-600 mb-4">{bot.description}</p>
//             {bot.enabled ? (
//               <Link href={bot.href}>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   Go to Chatbot
//                 </button>
//               </Link>
//             ) : (
//               <button
//                 disabled
//                 className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
//               >
//                 Coming Soon
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Link from "next/link";
import { chatbots } from "../data/chatbots";

const Portal = () => {
  const [search, setSearch] = useState("");
  const categories = Array.from(new Set(chatbots.map((bot) => bot.category)));
  const chatbotsByCategory = categories.map((category) => {
    const filtered = chatbots.filter(
      (bot) =>
        bot.category === category &&
        bot.keywords.some((kw) =>
          kw.toLowerCase().includes(search.toLowerCase())
        )
    );
    return { category, bots: filtered };
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Chatbot Portal</h1>

      {/* 🔍 Search Box */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="ค้นหาด้วยคำสำคัญ เช่น พนักงาน, EGP, สุขภาพ..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded shadow-sm text-blue-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* {chatbotsByCategory.map(
        ({ category, bots }) =>
          bots.length > 0 && (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bots.map((bot, index) => (
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
                      <h3 className="text-xl font-semibold text-gray-800 ml-3">
                        {bot.name}
                      </h3>
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
          )
      )} */}
      {chatbotsByCategory.every(({ bots }) => bots.length === 0) ? (
        <p className="text-center text-gray-500 mt-10">
          ไม่พบ chatbot ที่คุณค้นหา หากต้องการให้เราพัฒนา รบกวนติดต่อ{" "}
          <strong>คุณตงตง 0981234567</strong>
        </p>
      ) : (
        chatbotsByCategory.map(
          ({ category, bots }) =>
            bots.length > 0 && (
              <div key={category} className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bots.map((bot, index) => (
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
                        <h3 className="text-xl font-semibold text-gray-800 ml-3">
                          {bot.name}
                        </h3>
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
            )
        )
      )}
    </div>
  );
};

export default Portal;
