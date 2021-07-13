import React, { useState } from "react";
import { MainContent } from "./StyledComponents";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignUp({ history }) {
  const [signUpForm, setSignUpForm] = useState({
    user: {
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
    },
  });

  const signUp = async (e) => {
    e.preventDefault();
		const formData = new FormData(e.target)
		// method: "POST",
    // headers: {
    //   "Authorization": localStorage.getItem("token"),
    //   "Accept": "application/json"
    // },
    // body: formData
    const response = await fetch("http://localhost:3000/sign-up", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData,
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      history.push("/");
    } else {
      console.log(data);
    }
  };

  const changeInput = (e) => {
    setSignUpForm({
      user: {
        ...signUpForm.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <MainContent>
      <Form onSubmit={signUp}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={signUpForm.user.email}
            onChange={changeInput}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            value={signUpForm.user.username}
            onChange={changeInput}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={signUpForm.user.password}
            onChange={changeInput}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            value={signUpForm.user.password_confirmation}
            onChange={changeInput}
          />
        </Form.Group>
        <label htmlFor="image">
          Upload image
          <input type="file" name="profile_pic" accept="image/*" />
        </label>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </MainContent>
  );
}
