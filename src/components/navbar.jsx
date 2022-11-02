import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import logo from './ambulance-xxl.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';


const NavBar = () => {

  return (
      <Navbar>
          <Container>
              <img src={logo} width={50} height={50} alt="Logo" />
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Dropdown>
                                <Dropdown.Toggle   variant="Secondary" id="dropdown-basic">

                                </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                       <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};
export default NavBar;
