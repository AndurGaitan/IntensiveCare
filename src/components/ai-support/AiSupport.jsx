import React, { useState } from "react";
import { Search, Send, BookOpen, Brain, Loader } from "lucide-react";
import MessageList from "./MessageList";
import QuickSearch from "./QuickSearch";
import RecommendationPanel from "./RecommendationPanel";

export const AISupport = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Math.random().toString(36).substr(2, 9),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage = {
        id: Math.random().toString(36).substr(2, 9),
        content:
          "Based on the current medical literature, I recommend following the standard protocol for this case...",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] gap-4">
      <div className="w-64 bg-white rounded-lg p-4 shadow-sm">
        <QuickSearch />
      </div>
      <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm">
        <div className="flex-1 overflow-y-auto p-4">
          <MessageList messages={messages} />
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about medical protocols..."
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0A89FB]"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-[#0A89FB] text-white rounded-lg hover:bg-[#0A89FB]/90 transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </div>
      <div className="w-80 bg-white rounded-lg p-4 shadow-sm">
        <RecommendationPanel />
      </div>
    </div>
  );
};