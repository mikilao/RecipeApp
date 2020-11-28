import React from 'react';
//import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
//import { faHeart } from '../node_modules/@fortawesome/free-regular-svg-icons';
import { Jumbotron, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './header.css'

export default function Header() {
    return (
        <div className="Navbar" >
            
            <Navbar sticky="top" className="navbar" expand="md">
                <div className="container">
                    <NavbarBrand className="ml-auto" href="/"><img src="../public/Bridgelogo.jpg" height="30" width="30" alt="Recipe logo" /></NavbarBrand>
                
                <Nav className="ml-500">
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
                </div>
            </Navbar>
            <Jumbotron fluid className="header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="bigTitle">Recipe Blog</h1>
                            <h2>Rachel's recipe search</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>

        </div>
    )
}