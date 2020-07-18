import React, {Component} from 'react' 
import {Navbar,Nav, Form, NavDropdown, FormControl, Button, Dropdown} from 'react-bootstrap'
import './Nav.css'
class Navigation extends Component{
    render(){
        return(
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Easy Intern</Navbar.Brand>
          <Nav className="mr-auto ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about us">About Us</Nav.Link>
            <Nav.Link href="#contact us">Contact</Nav.Link>
            
          </Nav> 
          <Dropdown className="mr-2">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Register
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Company</Dropdown.Item>
    <Dropdown.Item href="#/action-2">student</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>

          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Login
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Company</Dropdown.Item>
    <Dropdown.Item href="#/action-2">student</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
      </Navbar>
           
        )
    }
}

export default Navigation;