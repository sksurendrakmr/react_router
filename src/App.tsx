import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Product } from "./components/Product";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import Admin from "./components/Admin";
import { Profile } from "./components/Profile";
const LazyAbout = React.lazy(() => import("./components/About")); //converted into an module that contains a default exported react component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Product />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="users/admin" element={<Admin />} />

        {/* Nested routes for dynamic routes */}
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* This route should be protected route and accessible only if the user is logged in */}
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
