import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Login() {
  const navigate = useNavigate();
  const [show1, setshow1] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (show1 < 4) {
        setshow1(show1 + 1);
      } else {
        setshow1(1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [show1]);

  const { dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const HandlerLoginForm = async (e) => {
    e.preventDefault();
    console.log("HandlerLoginForm called");
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      console.log("Login successful");
      const { message, status, ...other } = res.data;
      dispatch({ type: "LOGIN_SUCCESS", payload: other });
      navigate("/"); // redirect to users page after successful login
    } catch (err) {
      console.log("Login error", err.response);
      NotificationManager.error(err.response.data.message, "Warning", 3000);
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      console.log("error");
      
    }
  };
  return (
    <form onSubmit={HandlerLoginForm}>
      <label htmlFor="email">email:</label>
      <input
        type="email"
        id="username"
        ref={email}
      />

      <label htmlFor="password">password:</label>
      <input
        type="text"
        id="password"
        ref={password}
      />

      <button type="submit">Login</button>
    </form>
  );
}