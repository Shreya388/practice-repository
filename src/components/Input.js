import React, { useState } from "react";
import { Button, Navbar, Form, Container } from "react-bootstrap";



const Input = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [fullName, setFullName] = useState([]);
  const [fullUrl, setFullUrl] = useState([]);
 

  const inputName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  };

  const inputUrl = (event) => {
    console.log(event.target.value)
    setUrl(event.target.value)
  };


  const onSubmit = () => {
    setFullName(name);
    setFullUrl(url);
  
  }
    
    return (
      
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Form.Control placeholder="Name.." value={name} onChange={inputName} />
          <Form.Control placeholder="Url.." value={url} onChange={inputUrl} />
          <Button onClick={onSubmit}>+</Button>
            
        </Container>
      </Navbar>

      <Container>
        
        <a href= {'https://' + fullUrl}>{fullName}</a>
      </Container>
      </div>
    );
  }


export default Input;