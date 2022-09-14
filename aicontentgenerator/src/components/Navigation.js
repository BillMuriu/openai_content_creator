import logo from '../logo.svg'
import React from 'react'
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
        render() {
            return (
                <div>
                    <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
                        
                            <Navbar.Brand href="/">
                                <img src={logo} width="50px" />
                                Ai Content Creator
                            </Navbar.Brand>

                            <Navbar.Toggle/>

                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link href="product-description">Product Descritpion</Nav.Link>
                                <Nav.Link href="cold-emails">Emails</Nav.Link>
                                <Nav.Link href="tweets">Tweets</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                
                </div>
        );
    }

}

export default Navigation;