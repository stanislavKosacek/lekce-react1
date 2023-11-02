import './style.css';
import { ProductList } from '../../components/ProductList';
import { Udalosti1 } from '../../components/Udalosti1';
import { Udalosti2 } from '../../components/Udalosti2';

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Test</h1>
      <Udalosti2 />
      <ProductList />
      <Udalosti1 />
    </div>
  );
};
