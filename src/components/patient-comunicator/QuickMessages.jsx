import React from "react";
import { AlertCircle, ThumbsUp, HeartPulse, Flame, GlassWater,MicVocal, Utensils, HelpCircle, BoxIcon } from "lucide-react";

export const QuickMessages = ({ onSelect }) => {
  const quickMessages = [
    { text: "Tengo dolor", icon: HeartPulse, color: "text-red-500", pictogram: "pain" },
    { text: "Tengo ardor", icon: Flame, color: "text-red-500", pictogram: "pain" },
    { text: "Necesito ayuda", icon: HelpCircle, color: "text-[#0A89FB]", pictogram: "help" },
    { text: "Necesito hablar", icon: MicVocal, color: "text-[#0A89FB]", pictogram: "help" },
    { text: "Tengo hambre", icon: Utensils, color: "text-orange-500", pictogram: "food" },
    { text: "Tengo Sed", icon: GlassWater, color: "text-blue-500", pictogram: "water" },
    { text: "Si", icon: ThumbsUp, color: "text-green-500", pictogram: "yes" },
    { text: "No", icon: ThumbsUp, color: "text-green-500", pictogram: "yes" },
    { text: "Emergencia", icon: AlertCircle, color: "text-red-500", pictogram: "emergency" },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Mensajes rápidos</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {quickMessages.map(({ text, icon: Icon, color, pictogram }) => (
          <button key={text} onClick={() => onSelect(text, pictogram)} className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-[#98D8EF]/10 hover:border-[#0A89FB] transition-colors">
            <Icon className={`w-6 h-6 ${color}`} />
            <span className="font-medium">{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};