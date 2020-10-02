import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, DialogContent } from "@material-ui/core";
import { WORK_TASKS, WORK_TASK_BTN, WORK_CLOSE } from "../../constants/lang";

// FIX THIS
function SimpleDialog(props) {
  const { onClose, selectedValue, open, name, tasks } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="title"
      className="task-dialogbox"
      open={open}
    >
      <DialogTitle id="title" className="title">
        {WORK_TASKS}
        <br />
        {name}
      </DialogTitle>
      <DialogContent>
        <ul className="desc-list">
          {tasks.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
      </DialogContent>
      <DialogActions className="actions">
        <Button onClick={handleClose}>{WORK_CLOSE}</Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.bool.isRequired,
};

const SimpleDialogDemo = ({ name, tasks }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        className="task-button"
        onClick={handleClickOpen}
      >
        {WORK_TASK_BTN}
      </Button>
      <SimpleDialog
        name={name}
        tasks={tasks}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};
export default SimpleDialogDemo;
