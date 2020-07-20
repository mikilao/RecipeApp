import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import './header.css'

export default function Header() {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <NavbarBrand href="#">Navbar</NavbarBrand>
  </Container>
</Navbar>
            <Navbar bg="dark" variant="dark" sticky="top" className="navbar" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src="../public/Bridgelogo.jpg" height="30" width="30" alt="Recipe logo" /></NavbarBrand>
                </div>
                <Nav navbar>
                    <NavItem>

                        <i className="fa fa-home fa-lg" /> Home

                                </NavItem>
                    <NavItem>

                        <i className="fa fa-list fa-lg" /> Directory

                                </NavItem>
                    <NavItem>

                        <i className="fa fa-info fa-lg" /> About

                                </NavItem>
                    <NavItem>

                        <i className="fa fa-address-card fa-lg" /> Contact Us

                                </NavItem>
                </Nav>
            </Navbar>
            <Jumbotron fluid className="header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Recipe Blog</h1>
                            <h2>Rachel's recipe search</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>

        </div>
    )
}