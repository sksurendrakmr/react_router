import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * useNavigate hook return a function which in our case called 'navigate'
 * With this navigate function, we can navigate to different routes when click
 * on a button (in our case)
 *
 * navigate function accpets the path of the route as first argument.
 *
 * Implementing a back button programatically is also done with useNavigate hook.
 *
 */
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <p>This is a home page!!</p>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
};
