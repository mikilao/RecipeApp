import React from 'react';
//import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
//import { faHeart } from '../node_modules/@fortawesome/free-regular-svg-icons';
import { Jumbotron, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './header.css';
import{Link} from 'react-router-dom';
import Bridgelogo from "./Pages/Bridgelogo.jpg";

export default function Header() {
    return (
        <div className="Navbar" >
            
            <Navbar sticky="top" className="navbar" expand="md">
                <div className="container">
                    <NavbarBrand className="ml-auto" href="/"><img src={Bridgelogo} height="30" width="30" alt="Recipe logo" /></NavbarBrand>
                
                <Nav className="ml-500">
                    <Link to='/'>
                    <NavItem>
                  
                        <i className="fa fa-home fa-lg" /> Home

                                </NavItem></Link>
                    <Link to='/Directory'><NavItem>

                        <i className="fa fa-list fa-lg" /> Directory

                                </NavItem></Link>
                   <Link>
                   <NavItem>

                        <i className="fa fa-info fa-lg" /> About

                                </NavItem></Link> 
                    <Link to="/Contact"><NavItem>

                        <i className="fa fa-address-card fa-lg" /> Contact Us

                                </NavItem></Link>
                                <Link><NavItem>

<i className="fa fa-star fa-lg" /> Blog

        </NavItem></Link>
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