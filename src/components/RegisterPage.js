import React from "react";
import "./registerpage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const initialValues = {
  userName: "",
  email: "",
  password: "",
  mobile: 0,
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const register = async (values) => {
    console.log("Registering...");
    // this allows us to send form info with image
  
    let body2= {
        userName:values.userName,
        email:values.email,
        password:values.password,
        mobile:values.mobile
    }

    body2 = JSON.stringify(body2);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body2,
    };
    fetch('http://localhost:3005/auth/register', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    // const body = {
    //     userName: formData.userName,
    //     email: formData.email,
    //     password: formData.password,
    //     mobile:formData.mobile
    // };

    // axios
    //   .post("http://localhost:3002/auth/register", body)
    //   .then((x) => {
    //     console.log(x);
    //   })
    //   .catch((x) => {
    //     console.log(x);
    //   });

    // for (let value in values) {
    //   formData.append(value, values[value]);
    // }
    navigate("/");
    console.log("body2==>", body2);

    // const savedUserResponse = await fetch(

    //   "http://localhost:3002/auth/register",
    //   {
    //     method: "POST",
    //     body: formData,

    //   }
    // );
    // const savedUser = await savedUserResponse.json();
  };

  function handleRegister() {
    console.log("CLICKED...");
    console.log(values);
    // navigate("/register")
    register(values);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div id="title"><b>RegisterPage Voting App</b></div>
      <div id="mainform">
      <br />
        <label for="userName">User name:</label>
        <input
          onChange={handleInputChange}
          id="userName"
          name="userName"
          type="text"
        />
        <label for="password">Password :</label>
        <input
          onChange={handleInputChange}
          id="password"
          name="password"
          type="text"
        />
        <label for="email">Email :</label>
        <input
          onChange={handleInputChange}
          id="email"
          name="email"
          type="email"
        />
        <label for="mobile">Mobile No :</label>
        <input
          onChange={handleInputChange}
          id="mobile"
          name="mobile"
          type="tex"
        />
        <br />
      </div>
      
      <div>
        <div id="inner">
          <button
            onClick={() => {
              navigate("/");
            }}
            id="loginbtn"
          >
            Login
          </button>
          <button
            onClick={() => {
              handleRegister();
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
export default RegisterPage;
