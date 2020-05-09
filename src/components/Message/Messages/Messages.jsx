import React from "react";
import { useSelector } from "react-redux";
import Message from '../Message';

const Messages = () => {
  const { messages } = useSelector((state) => state.messageReducer);

  return (
    <>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </>
  );
};

export default Messages;
