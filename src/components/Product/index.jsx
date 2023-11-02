import { useState } from 'react';

export const Product = ({ myName, price }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="product">
      <h3>{myName}</h3>
      <p>{price} Kč</p>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <p>Cena celkem: {price * count},- Kč</p>
      </div>
    </div>
  );
};
