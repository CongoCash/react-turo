import {Navbar, NavDropdown, MenuItem, NavItem, Nav} from 'react-bootstrap'
import React from "react";
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar className="margin-0" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Turo King</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="City" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>San Francisco</MenuItem>
            <MenuItem eventKey={3.2}>Los Angeles</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <div className="archivo white">Browse Cars</div>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <div className="archivo white">List Your Car</div>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )};

export default Navigation;