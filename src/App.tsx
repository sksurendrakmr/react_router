import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Product } from "./components/Product";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { NewProducts } from "./components/NewProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Product />}>
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
