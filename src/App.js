import './App.css';
import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap"
import Avatar from '@material-ui/core/Avatar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


function Item() {
  const [count, setCount] = useState(0);
  return <>
    <p>You have pressed the button {count} many times.</p>
    <button onClick={() => { setCount(count + 1) }}>Hello mom!</button>
  </>;
}

function App() {


  return (
    <div className="App">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <ColorSchemesExample />
      <h1>I am Vaibhav</h1>
      <Item />
    </div>
  )
};

export default App;
