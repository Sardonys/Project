import React, {Component} from 'react' 
import {Navbar,Nav, Form, NavDropdown, FormControl, Button, Dropdown} from 'react-bootstrap'
import './Nav.css'
class Searchbox extends Component{
    render(){
        return(
          <div className="box">
          <div className="search">
            <div className="ml-4"><h5>this is change</h5></div>
          <Form inline className="d-flex justify-content-center">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        </div>
        </div>
        )
    }
}

export default Searchbox;