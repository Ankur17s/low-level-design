import React from "react";

const ChatMessage = ({ name, message, photo }) => {
  return (
    <div className="flex p-2 gap-3">
      <img className="h-8 w-8 rounded-full" src={photo} alt={name} />
      <p className="">
        <span className="font-bold">{name} - </span>
        <span>{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
