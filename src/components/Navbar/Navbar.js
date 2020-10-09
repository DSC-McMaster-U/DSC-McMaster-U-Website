import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./Navbar.css"
import tw, { styled } from "twin.macro";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => (
    <>
    <ReactBootStrap.Navbar className = "nav-bar" collapseOnSelect expand="xl" variant="light">
  <ReactBootStrap.Navbar.Brand href="#home"><img className = "photo" src= {require("../../images/DSCLogo.png")} alt = "Logo"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#About">About us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Team">Team</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Events" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
       Contact us
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    </>
);

export default Navbar;