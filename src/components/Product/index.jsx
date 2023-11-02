export const Product = ({ myName, price }) => {
  const handleClick = () => {
    console.log(`Koupil sis ${myName}`);
  };
  return (
    <div className="product">
      <h3>{myName}</h3>
      <p>{price} Kč</p>
      {price > 50000 ? <p>Drahé</p> : <p>Levné</p>}
      <button onClick={handleClick}>Koupit</button>
    </div>
  );
};
