
import React from "react";
import { Delete } from "lucide-react";

export const AccessibleKeyboard = ({ onKeyPress }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="space-y-2">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center gap-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key.toLowerCase())}
              className="w-12 h-12 rounded-lg bg-white border border-gray-200 text-lg font-medium hover:bg-[#98D8EF] hover:border-[#0A89FB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A89FB]"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => onKeyPress("backspace")}
          className="px-4 h-12 rounded-lg bg-white border border-gray-200 text-lg font-medium hover:bg-[#98D8EF] hover:border-[#0A89FB] transition-colors flex items-center gap-2"
        >
          <Delete className="w-5 h-5" />
          Delete
        </button>
        <button
          onClick={() => onKeyPress("space")}
          className="px-16 h-12 rounded-lg bg-white border border-gray-200 text-lg font-medium hover:bg-[#98D8EF] hover:border-[#0A89FB] transition-colors"
        >
          Space
        </button>
      </div>
    </div>
  );
};
