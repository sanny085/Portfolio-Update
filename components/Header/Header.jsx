import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown  } from 'react-bootstrap';
import { Link, NavLink, withRouter } from "react-router-dom";
import CustomButton from "../Button/Button";
import {
  HomeRounded,
  Telegram
} from "@material-ui/icons";
import ResumeData from "../../utils/resumeDate";

import "./Header.css";
import { Grid } from "@material-ui/core";

function Header(props) {
    const pathname = props?.location?.pathname;
    return (
    <>
    <Navbar collapseOnSelect expand="lg" sticky="top" className="header">
        <Nav.Link as={NavLink} to="./" className="header_navlink"> 
          <Navbar.Brand className="header_home">
             <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>

      <Navbar.Toggle />
      
      <Navbar.Collapse>
         <Nav className="mr-auto">
            {/*Resume link*/}
            <Nav.Link as={NavLink} to="./" className={pathname == "/" ? "header_link_active" : "header_link"}>
             Resume
            </Nav.Link>

            {/*Resume link*/}
            <Nav.Link as={NavLink} to="/portfolio" className={pathname == "/portfolio" ? "header_link_active" : "header_link"}>
             Portfolio
            </Nav.Link>
          </Nav>
         <div className="header_right">
            {Object.keys(ResumeData.socials).map((key) => (
              <a href={ResumeData.socials[key].url} target="_blank">
                {ResumeData.socials[key].icon}
              </a>
            ))}
           <a href={`mailto:${ResumeData.Email.url}`} className="Hire_me" target="_blank">
            <CustomButton text={"Hire Me"} icon={<Telegram />}  />
           </a>   
          </div>
         
        
        </Navbar.Collapse>
     </Navbar>

<>
  <Navbar collapseOnSelect expand="lg"   className="header">
  <Navbar.Brand href="#home" className="header_home">
      <HomeRounded />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>



   </>
    );
}
export default withRouter(Header);
