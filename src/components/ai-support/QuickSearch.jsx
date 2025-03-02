import React from "react";
import { Search, BookOpen, Star } from "lucide-react";

const QuickSearch = () => {
  const quickLinks = [
    "Sepsis Protocol",
    "Cardiac Emergency",
    "Stroke Assessment",
    "Ventilator Management",
    "Pain Management",
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search protocols..."
          className="w-full pl-9 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0A89FB] text-sm"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-2 font-medium mb-2 text-sm">
          <BookOpen className="w-4 h-4" /> Quick Access Protocols
        </h3>
        <div className="space-y-1">
          {quickLinks.map((link) => (
            <button key={link} className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors">{link}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;