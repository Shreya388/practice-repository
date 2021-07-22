import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Navbar bg="light">
        <Container style={{color:"white"}} >
          <Nav className="me-auto">
            <Nav.Link>Hello, {this.props.name}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    )
  }
}

export default Header;