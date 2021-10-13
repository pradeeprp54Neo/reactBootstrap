import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export class NavigationBar extends Component {
    render() {
        return (
            <Nav className="justify-content-center text-uppercase fixed-top bg-light py-3" style={{fontSize:"12px"}}>
                <Nav.Item>
                <Nav.Link ><NavLink to="/home" activeClassName="active" >Home</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>Picnic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>Promotion</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link ><NavLink to="/form" activeClassName="active" >Contact Us</NavLink></Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavigationBar
