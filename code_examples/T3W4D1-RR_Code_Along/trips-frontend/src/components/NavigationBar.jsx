import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import { AuthenticationContext } from "../contexts/AuthenticationProvider";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

export default function NavigationBar() {
  const [username, setUsername] = useContext(AuthenticationContext);

  const logOut = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token')
    setUsername("")
  }
  return (
    <Navbar>
      <Link to="/">
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {username ? (
          <div>Signed in as {username} <Button onClick={logOut}>Log out</Button></div>
        ) : (
          <>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/sign-up" className="justify-content-end">
                Sign Up
              </Link>
            </Nav.Link>
          </>
        )}
        <Navbar.Text>
          {/* Signed in as: <a href="#login">Mark Otto</a> */}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
