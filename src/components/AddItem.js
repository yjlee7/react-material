import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddItem({ addItem }) {
  const initInputs = { name: '', price: '' };
  const [inputs, setInputs] = useState(initInputs);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputs(initInputs);
  };

  const nameInput = useRef();
  const priceInput = useRef();

  const changeInput = (elem) => {
    const key = elem.name;
    const value = elem.value;
    setInputs({ ...inputs, [key]: value });
  };

  const handleClick = () => {
    if (inputs.name.length === 0) {
      alert('name을 입력 해주세요.');
      nameInput.current.focus();
      return;
    }

    if (inputs.price.length === 0 || inputs.price < 1000) {
      alert('1000원 이상 입력 해주세요.');
      priceInput.current.focus();
      return;
    }

    addItem(inputs);
    setInputs(initInputs);
  };

  return (
    <div>
      <IconButton color="inherit" variant="outlined" onClick={handleClickOpen}>
        <AddCircleIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">{'Add item'}</DialogTitle>
        <DialogContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              margin: '10px',
            }}
          >
            <span>name</span>
            <TextField
              id="filled-basic"
              label="name"
              variant="outlined"
              name="name"
              value={inputs.name}
              onChange={(e) => changeInput(e.target)}
              inputRef={nameInput}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              margin: '10px',
            }}
          >
            <span>price</span>
            <TextField
              id="filled-basic"
              label="price"
              type="number"
              name="price"
              variant="outlined"
              value={inputs.price}
              onChange={(e) => changeInput(e.target)}
              inputRef={priceInput}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClick}>추가</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItem;
