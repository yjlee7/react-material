import { useEffect, useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Cart from './components/Cart';
import ItemList from './components/ItemList';

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

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const addCart = (item) => {
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
      <ItemList items={items} addCart={addCart} />
      <Cart
        cartItems={cartItems}
        removeCart={removeCart}
        addCount={addCount}
        minusCount={minusCount}
      />
      <AddItem addItem={addItem} />
    </>
  );
}

export default App;
