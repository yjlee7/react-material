import React from 'react';

function ItemList({ items, addCart }) {
  return (
    <div style={{ border: '1px solid black' }}>
      <h2>ItemList</h2>
      {items.map((item, index) => (
        <div key={`${item.name + index}`}>
          {item.name}: {item.price}
          <button onClick={() => addCart(item)}>cart 추가</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
