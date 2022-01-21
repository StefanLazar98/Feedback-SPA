import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("")
  useEffect(() => {
    setOpen(props.popUp)
    setMessage(props.message)
  })

  const handleClose = () => {
    setOpen(false)
    props.handlePopUpClose()
  };

  return (
    <div>
      {open ?
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog> : null
      }
    </div>
  );
}