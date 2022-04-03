import React from "react";
import { Link, Outlet } from "react-router-dom";
/**
 * Not include "/"(forward slash) for nested routes.
 *
 */
export const Product = () => {
  return (
    <React.Fragment>
      <input type="search" placeholder="Search products" />
      <nav className="secondary-nav">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};
