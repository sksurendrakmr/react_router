import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { StateType } from "./ProtectedRoute";

export const Login = () => {
  //Tied to an input element.
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  //Check if the path is set on the state object and use the same as redirect path
  const redirectPath = (location.state as StateType)?.path || "/";
  const handleLogin = () => {
    //within this function, we need to call the login function from auth context
    auth.login(user);
    //Once we set the username, we navigate the user to the home page.
    navigate(redirectPath, { replace: true }); //when we click on the browser back button after login, now it will not go back to previous page
    //Redirect the user back to the protected route after login
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
