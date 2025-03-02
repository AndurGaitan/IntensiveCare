import React from "react";
import { Bot, User } from "lucide-react";

const MessageList = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-[#0A89FB]" : "bg-[#98D8EF]"}`}>
            {message.sender === "user" ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
          </div>
          <div className={`max-w-[80%] rounded-lg p-3 ${message.sender === "user" ? "bg-[#0A89FB] text-white" : "bg-gray-100"}`}>
            <p>{message.content}</p>
            <span className="text-xs opacity-70 mt-1 block">{message.timestamp.toLocaleTimeString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;