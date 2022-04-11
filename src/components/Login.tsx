import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Login = () => {
  //Tied to an input element.
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = () => {
    //within this function, we need to call the login function from auth context
    auth.login(user);
    //Once we set the username, we navigate the user to the home page.
    navigate("/");
  };
  return (
    <div>
      <label htmlFor="username">
        UserName:{" "}
        <input
          type="text"
          id="username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
