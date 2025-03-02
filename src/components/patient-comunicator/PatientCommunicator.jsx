import React, { useState } from "react";
import { Volume2 } from "lucide-react";
import { PictogramDisplay } from "./PictogramDisplay";
import { AccessibleKeyboard } from "./AccessibleKeyboard";
import { QuickMessages } from "./QuickMessages";

export const PatientCommunicator = () => {
  const [message, setMessage] = useState("");
  const [selectedPictogram, setSelectedPictogram] = useState(null);

  const handleKeyPress = (key) => {
    if (key === "backspace") {
      setMessage((prev) => prev.slice(0, -1));
    } else if (key === "space") {
      setMessage((prev) => prev + " ");
    } else {
      setMessage((prev) => prev + key);
    }
  };

  const handleQuickMessage = (text, pictogram) => {
    setMessage(text);
    setSelectedPictogram(pictogram);
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Panel de Comunicación</h2>
            <button
              onClick={handleSpeak}
              className="flex items-center gap-2 px-4 py-2 bg-[#0A89FB] text-white rounded-lg hover:bg-[#0A89FB]/90 transition-colors"
            >
              <Volume2 className="w-5 h-5" />
              <span>Leer en voz alta</span>
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 min-h-[100px] text-xl">
            {message || "Tu mensaje aparecerá aquí..."}
          </div>
        </div>
        <PictogramDisplay selectedPictogram={selectedPictogram} />
        <QuickMessages onSelect={handleQuickMessage} />
        <AccessibleKeyboard onKeyPress={handleKeyPress} />
      </div>
    </div>
  );
};