import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div>
      <h1>Welcome to Kithan Autocare Limited</h1>
      <p>You have successfully logged in!</p>
    </div>
  );
};

export default Home;
