import React, { ChangeEvent, FormEvent } from "react";
import { useChat } from "ai/react";
import { Input } from "./ui/input";
import { Forward } from "lucide-react";

const InputPrompt = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="relative px-8 w-full max-w-[400px]">
      <form onSubmit={handleSubmit}>
        <Input
          // autoFocus
          value={input}
          placeholder="Enter Prompt Here"
          onChange={handleInputChange}
          className="bg-white dark:bg-transparent"
        />
        <button type="submit" className="w-full">
          <Forward
            strokeWidth={1.25}
            className="absolute right-[10%] top-[9%] h-6 w-6 hover:text-primary"
          />
        </button>
      </form>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}
    </div>
  );
};

export default InputPrompt;
