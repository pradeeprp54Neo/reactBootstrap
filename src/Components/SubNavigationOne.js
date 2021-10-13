import React, { Component } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'

export class SubNavigationOne extends Component {
    render() {
        return (
            <Container fluid>
            <Row className="text-center">
                <Col md={12} className="my-3"><h5>FEATURED COLLECTION</h5></Col>
                {/* <Col md={12}  style={{fontSize:'24px'}}>
                    <i className='fas fa-angle-double-right' ></i>	&nbsp;
                    <i className='fab fa-apple' ></i>	&nbsp;
                    <i className='fab fa-amazon' ></i>	&nbsp;
                    <i className='fab fa-facebook-square' ></i>	&nbsp;
                    <i className='fab fa-twitter' ></i>	&nbsp;
                    <i className='fab fa-twitch' ></i>	&nbsp;
                    <i className='fab fa-instagram' ></i>	&nbsp;
                    <i className='fas fa-angle-double-left' ></i>
                </Col> */}
                <Col className="my-3">
                <Nav className="justify-content-center text-uppercase" style={{fontSize:"12px"}}>
                <Nav.Item>
                <Nav.Link>New arrival</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >CLOTHES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >HATS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >SHOES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >WATCHES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >OTHERS</Nav.Link>
                </Nav.Item>
                </Nav>
                </Col>
                </Row>
            

           
            </Container>
        )
    }
}

export default SubNavigationOne
