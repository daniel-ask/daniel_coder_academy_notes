import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MainContent, CenterContainer } from "./StyledComponents";
import { AuthenticationContext } from '../contexts/AuthenticationProvider';

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

	const [username, setUsername, profilePic, setProfilePic] = useContext(AuthenticationContext)
	
  const [remember, setRemember] = useState(false);
	
  const toggleCheck = (event) => {
		const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setRemember(value);
  };
	
	const changeInput = e => {
		console.log(loginForm)
		setLoginForm({
			...loginForm,
			[e.target.name] : e.target.value
		})
	}

  const fetchLogin = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

		console.log(loginForm)

    const raw = JSON.stringify(loginForm);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch("http://localhost:3000/login", requestOptions)
		const data = await response.json()
		console.log(data)
		if(remember){
			localStorage.setItem('token',data.token)
		}else{
			sessionStorage.setItem('token', data.token)
		}
		setUsername(data.user.username)
    setProfilePic(data.profile_pic)
  };

  const login = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  return (
    <MainContent>
      <Form onSubmit={login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" name='username' onChange={changeInput} value={loginForm.username}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => changeInput(e)} value={loginForm.password} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={toggleCheck}
            checked={remember}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </MainContent>
  );
}
