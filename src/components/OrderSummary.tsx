import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * To go back, as first argument we pass -1.
 *
 * Sometimes, we might also want to replace the history instead of
 * pushing a route onto the stack.
 * For that, we can pass in an optional second argument which is an object and pass replace property with value true.
 * Refer home component
 */

export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};
