import React from "react";
import{Link} from 'react-router-dom'
import logo from '../logo.svg'
import {Navbar, Nav} from 'react-bootstrap'

 function NavBar() {

return(
  <Navbar bg="light" expand="lg" className=" d-flex justify-content-between align-items-between">
  <Navbar.Brand href="#home"><img src={logo} alt="coctaildb logo" className= "mr-2 "/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav-links">
      <Link to="/" className ="mr-3">Home</Link>
      <Link to="/about">About</Link>   
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}


export default NavBar