import React, { useState } from "react";
import PropTypes from "prop-types";
import { DialogContent, DialogTitle, Dialog } from "@material-ui/core";
import { WORK_TASK_BTN, WORK_TASKS } from "../../constants/lang";

function SimpleDialog(props) {
  const { onClose, open, name, data } = props;

  const handleClose = () => {
    onClose(onClose);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        {WORK_TASKS} <div>{name}</div>
      </DialogTitle>
      <DialogContent>
        <hr />
        <ul>
          {data &&
            data.map((task, index) => {
              return <li key={index}>{task}</li>;
            })}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Modal({ id, data, name }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="primary-button" onClick={handleClickOpen}>
        {WORK_TASK_BTN}
      </button>
      <SimpleDialog
        id={id}
        name={name}
        data={data}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
