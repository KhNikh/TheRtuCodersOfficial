import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser, setLogedIn }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("/login", user).then((res) => {
      alert(res.data.message);
      if (res.data.message === "Login Successfull") {
        setLoginUser(res.data.user);
          setLogedIn(true);
          console.log(res.data.user);
          history.push("/homepage");
      }
     else history.push("/login");
    });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
