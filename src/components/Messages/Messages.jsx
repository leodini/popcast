import React from "react";
import { useSelector } from "react-redux";
import { Message } from '../';

const Messages = () => {
  const messages = useSelector((state) => state.messageReducer.messages);

  return (
    <>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </>
  );
};

export default Messages;
