import React from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {
    Navigate("/");
  };
  return (
    <div>
      <input placeholder="Enter email" type="text" />
      <input placeholder="Enter Password" type="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
