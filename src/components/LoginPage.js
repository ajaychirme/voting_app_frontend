import React from "react";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleLogin() {
    if (values.email == "admin@gmail.com" && values.password == "admin") {
      navigate("/admin");
      console.log("Going to admin page");
      return;
    }

    let body1 = {
      email: values.email,
      password: values.password,
    };
    body1 = JSON.stringify(body1);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body1,
    };
    fetch("http://localhost:3005/auth/login", options)
      .then((response) => response.json())
      .then((response) => {
        console.log("ID ==>", response.user.id);
        localStorage.setItem("UserID",response.user.id);
        localStorage.setItem("Token",response.token);
        return response;
      })
      .then((resp) => {
        if (resp.success == true) {
          navigate("/user");
        }
        if (resp.success == false) {
          alert("Check email and password");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));

    console.log(values);
  }

  return (
    <>
      <div id="title">
        <b>LoginPage Voting App</b>
      </div>
      <div id="mainform">
        <br />
        <label for="userName">User name:</label>
        <input
          id="email"
          onChange={handleInputChange}
          value={values.userName}
          name="email"
          type="text"
        />
        <label for="password">Password :</label>
        <input
          id="password"
          onChange={handleInputChange}
          value={values.password}
          name="password"
          type="text"
        />
        <br />
      </div>
      <div>
        <div id="inner">
          <button
            onClick={() => {
              handleLogin();
            }}
            id="loginbtn"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
            id="registerbtn"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
