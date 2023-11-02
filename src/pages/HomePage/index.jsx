import './style.css';
import { ProductList } from '../../components/ProductList';
import { Udalosti1 } from '../../components/Udalosti1';
import { Udalosti2 } from '../../components/Udalosti2';
import { Auto } from '../../components/Auto';
import { Menu } from '../../components/Menu';

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Test</h1>
      {/* <Menu />
      <Auto znacka={'Škoda'} model={'Superb'} />
      <Udalosti2 /> */}
      <ProductList />
      <Udalosti1 />
    </div>
  );
};
