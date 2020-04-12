import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMessage } from "../store/ducks/messageReducer";
import "./styles.css";

const Message = ({ message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeMessage(message));
    }, 2500);
  }, [dispatch, message]);

  return (
    <React.Fragment>
      {message && (
        <div className="message">
          <span>{message}</span>
        </div>
      )}
    </React.Fragment>
  );
};

export default Message;
