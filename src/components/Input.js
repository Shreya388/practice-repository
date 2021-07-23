import React, { useState } from "react";
import {Navbar, Nav, Container, Form, Button} from 'react-bootstrap';

const Input = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
      console.log(event.target.value)
      setName(event.target.value)
    };

    const onSubmit = () => {
      setFullName(name);
      
    }
    
    return (
      
      <Navbar bg="dark" variant="dark">
        <Container>
          
        <Navbar.Brand href="#home"> {fullName}</Navbar.Brand>
          <Nav className="me-auto">
          <Form.Control placeholder="type something :)" value={name} onChange={inputEvent} />
          <Button bg="primary" onClick={onSubmit}>Submit</Button>
          </Nav>
        </Container>
      </Navbar>
     
      
    );
  }


export default Input;