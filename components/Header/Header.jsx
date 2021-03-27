import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown  } from 'react-bootstrap';
import { Link, NavLink, withRouter } from "react-router-dom";
import CustomButton from "../Button/Button";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import ResumeData from "../../utils/resumeDate";

import "./Header.css";
import { Grid } from "@material-ui/core";

function Header() {
    const pathname 
    return (
        <Navbar expand="lg" sticky="top" className="header">
       
        <Nav.Link as={NavLink} to="./"> 
          <Navbar.Brand className="header_home">
             <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link>Resume</Nav.Link>
            <Nav.Link>Portfolio</Nav.Link>
          </Nav>
  
          <div className="header_right">
            {Object.keys(ResumeData.socials).map((key) => (
              <a href={ResumeData.socials[key].link} target="_blank">
                {ResumeData.socials[key].icon}
              </a>
            ))}
            <CustomButton text={"Hire Me"} icon={<Telegram />} />
          </div>
        </Navbar.Collapse>


      </Navbar>
    );
    
}

export default Header;
