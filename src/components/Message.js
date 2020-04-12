import React from "react";
import { useDispatch } from "react-redux";
import { removeMessage } from "../store/ducks/messageReducer";
import "./styles.css";

const Message = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeMessage(props.message));
    }, 2500);
  }, [dispatch]);

  return (
    <>
      {message && (
        <div className="message">
          <span>{props.message}</span>
        </div>
      )}
    </>
  );
};

export default Message;
