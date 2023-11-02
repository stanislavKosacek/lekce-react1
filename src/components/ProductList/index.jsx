import { Product } from '../Product';

export const ProductList = () => {
  const dnyVTydnu = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];
  const products = [
    {
      name: 'iPhone 15',
      price: 30000,
    },
    {
      name: 'Macbook Pro',
      price: 90000,
    },
  ];
  return (
    <div className="container">
      <h2>Můj list produktů</h2>
      <div className="list">
        {products.map((product) => (
          <Product
            key={product.name}
            myName={product.name}
            price={product.price}
          />
        ))}
      </div>
      <ul>
        {dnyVTydnu.map((den) => (
          <li key={den}>{den}</li>
        ))}
      </ul>
    </div>
  );
};
