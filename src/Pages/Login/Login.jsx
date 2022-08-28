import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className={styles.loginmain}>
      <p>CREATE A FREE ACCOUNT</p>
      <p>Make and share unlimited videos for free</p>
      <input placeholder="Enter Email" type="text" />
      <br />
      <input placeholder="Enter Password" type="password"/>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>or</p>
      <button onClick={handleSubmit}>Sign Up with Google</button>
    </div>
  );
};

export default Login;
