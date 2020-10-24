import React, {useState, useEffect} from 'react';
import './Header.css';
import {Navbar, Nav, Container} from 'react-bootstrap'

function Header() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400){
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);


    return (
        <div className="container">
        <Navbar collapseOnSelect scrolling light expand="md" fixed="top" className={`  ${show && "nav__black "}`} >
            <Container>
                <Navbar.Brand href="#home" className="header__logo">Travelgram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="dropdown-nav" >
                    <Nav className="ml-auto light">
                        <Nav.Link className="header__nav" href="#home">Home</Nav.Link>
                        <Nav.Link className="header__nav" href="#link">Explore</Nav.Link>
                        <Nav.Link className="header__nav" href="#home">Travel</Nav.Link>
                        <Nav.Link className="header__nav" href="#link">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Header
