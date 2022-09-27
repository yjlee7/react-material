import { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Cart from './components/Cart';
import ItemList from './components/ItemList';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const list = [
  {
    name: 'book',
    price: 9000,
  },
  {
    name: 'cup',
    price: 5000,
  },
  {
    name: 'pen',
    price: 1200,
  },
  {
    name: 'water',
    price: 900,
  },
  {
    name: 'chair',
    price: 50000,
  },
  {
    name: 'clock',
    price: 20000,
  },
];

function App() {
  const [items, setItems] = useState(list);
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };
  
  const addCart = (item) => {
    setOpen(true);
    const isDuplicated = cartItems?.find((i) => i.name === item.name) ? true : false;
    if (isDuplicated) {
      setCartItems(cartItems.map((i) => (i.name === item.name ? { ...i, count: i.count + 1 } : i)));
    } else {
      const newItem = { ...item, count: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const addCount = (item) => {
    setCartItems(cartItems.map((i) => (i.name === item.name ? { ...i, count: i.count + 1 } : i)));
  };

  const minusCount = (item) => {
    setCartItems(cartItems.map((i) => (i.name === item.name ? { ...i, count: i.count - 1 } : i)));
  };

  const removeCart = (item) => {
    setCartItems(cartItems.filter((i) => i.name !== item.name));
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ItemList
            </Typography>
            <Cart
              cartItems={cartItems}
              removeCart={removeCart}
              addCount={addCount}
              minusCount={minusCount}
            />
            <AddItem addItem={addItem} />
          </Toolbar>
        </AppBar>
      </Box>
      <ItemList items={items} addCart={addCart} />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Cart 추가 완료"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}

export default App;
