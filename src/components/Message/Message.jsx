import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeMessage } from "../../store/ducks";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { MdClose } from 'react-icons/md'

const Message = ({ message }) => {
  const [open, setOpen] = useState(false)
  
  const dispatch = useDispatch();
  
  const handleClose = () => {
    removeMessageAndCloseSnack()
  }

  const removeMessageAndCloseSnack = () => {
    setOpen(false)
    dispatch(removeMessage(message));
  }
  
  useEffect(() => {
    setOpen(true)
    console.log(message)
    setTimeout(() => {
      removeMessageAndCloseSnack()
    }, 2500);
  }, [dispatch, message, removeMessageAndCloseSnack]);


  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <MdClose fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default Message;
