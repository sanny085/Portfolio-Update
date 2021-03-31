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

    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
            {/*Resume link*/}
            <Nav.Link as={NavLink} href="#resume" to="./" className={pathname == "/" ? "header_link_active" : "header_link"}>
             Resume
            </Nav.Link>

            {/*Resume link*/}
            <Nav.Link as={NavLink} href="#portofolio" to="/portfolio" className={pathname == "/portfolio" ? "header_link_active" : "header_link"}>
             Portfolio
            </Nav.Link>
          </Nav>
        <Nav>
         <div className="header_right">
            {Object.keys(ResumeData.socials).map((key) => (
              <Nav.Link href={ResumeData.socials[key].url} target="_blank">
                {ResumeData.socials[key].icon}
              </Nav.Link>

            ))}
           <Nav.Link href={`mailto:${ResumeData.Email.url}`} className="Hire_me" target="_blank">
              <CustomButton text={"Hire Me"} icon={<Telegram />}  />
           </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
</Navbar>
 
</>
    );
}
export default withRouter(Header);
