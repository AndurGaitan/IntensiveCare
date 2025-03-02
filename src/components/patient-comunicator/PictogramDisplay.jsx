import React from "react";
import { AlertCircle, ThumbsUp, HeartPulse, Utensils, HelpCircle } from "lucide-react";

export const PictogramDisplay = ({ selectedPictogram }) => {
  const getPictogram = () => {
    switch (selectedPictogram) {
      case "pain": return <HeartPulse className="w-16 h-16 text-red-500" />;
      case "help": return <HelpCircle className="w-16 h-16 text-[#0A89FB]" />;
      case "food": return <Utensils className="w-16 h-16 text-orange-500" />;
      case "yes": return <ThumbsUp className="w-16 h-16 text-green-500" />;
      case "emergency": return <AlertCircle className="w-16 h-16 text-red-500" />;
      default: return null;
    }
  };

  if (!selectedPictogram) return null;
  return <div className="flex justify-center items-center mb-6"><div className="p-8 bg-gray-50 rounded-full">{getPictogram()}</div></div>;
};