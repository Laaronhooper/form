import { useState } from "react";
import '../src/css/App.css';
import FormInput from './component/FormInput';
import React from 'react';

const App = () => {
  const [values, setValues] = useState({
    usename: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldnt include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Should be a valid email",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "8-20 Characters and should include one letter, one number and one special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
      
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Password Confirmation",
      errorMessage: "Passwords must match",
      label: "Password Confirmation",
      pattern: values.password,
      required: true
    }
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value})
  }

  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit} >
        <h1> Register </h1>
          {input.map((input) =>
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          )}
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
