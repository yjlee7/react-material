import React from 'react';

function Cart({ cartItems, removeCart, addCount, minusCount }) {
  let totalPrice = 0;
  cartItems?.forEach((item) => {
    totalPrice += item.price * item.count;
  });

  return (
    <div style={{ border: '1px solid black' }}>
      <h2>Cart</h2>
      {cartItems?.map((item, index) => (
        <div key={`${item}+${index}`}>
          {item.name}: {item.price} (개수 :{' '}
          <button disabled={item.count === 1 ? true : false} onClick={()=>minusCount(item)}>-</button>
          {item.count}
          <button onClick={()=>addCount(item)}>+</button>)<button onClick={() => removeCart(item)}>삭제</button>
        </div>
      ))}
      <div>총 금액 : {totalPrice}</div>
    </div>
  );
}

export default Cart;
