import {Col, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {Navbar, NavDropdown, MenuItem, NavItem, Nav} from 'react-bootstrap'
import React from "react";

export default function Navigation() {
  <Navbar inverse collapseOnSelect>
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
          Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link Right
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
}