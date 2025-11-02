import './App.css';
import TemporaryDrawer from './components/carShop/carShop';
import Products from './pages/products/products';
import { useState } from 'react';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDrawerOpen(true)}>🛒 Carrito</button>
      <TemporaryDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <Products />
    </div>
  );
}

export default App;
