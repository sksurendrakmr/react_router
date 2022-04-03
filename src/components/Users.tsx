import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  //Behaves similar to useState but instead of store state in memory though
  //it is stored in the URL.
  const [serachParams, setSearchParams] = useSearchParams();
  const showActiveUsers = serachParams.get("filter") === "active";
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>

      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing All users</h2>
      )}
    </div>
  );
};
