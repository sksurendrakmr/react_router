import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  //return an object of key value pairs
  const params = useParams();
  const userId = params.id; //id corresponds to dynamic segments we config in route.
  return <div>User Details - {userId}</div>;
};
