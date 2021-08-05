import React, { useState } from "react";
import {Form, Navbar, Button } from "react-bootstrap";


/*
const Input = () => {
  const [name, setName] = useState([]);
  const [url, setUrl] = useState([]);


  const a = {
    name : "ram",
    age : 25,
  }
*/

const Input = () => {
    
    const[name, setName] = useState([{firstName: "", url:""}])
    
  
    return (
      
      <div>
      <Navbar bg="dark" variant="dark">
      <Form>
        <Form.Control type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})} />
        <Form.Control type="text" value={name.url} onChange={e => setName({ ...name, url: e.target.value})} />
        <Button>Go</Button>

        
    
      </Form>
      </Navbar>

      <a href={"https://" + name.url}>{name.firstName}</a>
      </div>
    );
  }


export default Input;