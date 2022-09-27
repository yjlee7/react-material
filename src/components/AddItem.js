import React, { useRef, useState } from 'react';

function AddItem({ addItem }) {
  const initInputs = { name: '', price: '' };
  const [inputs, setInputs] = useState(initInputs);

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
    <div style={{ border: '1px solid black' }}>
      <h2>AddItem</h2>
      <div>
        <span>name</span>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={(e) => changeInput(e.target)}
          ref={nameInput}
        />
      </div>
      <div>
        <span>price</span>
        <input
          type="number"
          name="price"
          value={inputs.price}
          onChange={(e) => changeInput(e.target)}
          ref={priceInput}
        />
      </div>
      <button onClick={handleClick}>item추가</button>
    </div>
  );
}

export default AddItem;
