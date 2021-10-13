import React, { Component } from 'react'
import { Col, Container, Row ,Button } from 'react-bootstrap'

export class ButtonGroupTwo extends Component {
    render() {
        return (
            <Container fluid >
                <Row>
                <Button as={Col}   className="text-light p-3 text-middle border-0" style={{fontSize:"12px",wordSpacing:"2px",backgroundColor:'#3b5998'}}>
                <i className='fab fa-facebook'></i> &nbsp; FACEBOOK
                </Button>
                <Button as={Col}   className="text-light p-3 text-middle border-0" style={{fontSize:"12px",wordSpacing:"2px",backgroundColor:'#1DA1F2'}}>
                <i class='fab fa-twitter' ></i>	&nbsp; TWITTER
                </Button>
                <Button as={Col}   className="text-light p-3 text-middle border-0" style={{fontSize:"12px",wordSpacing:"2px",backgroundColor:' #8a3ab9'}}>
                <i class='fab fa-instagram' ></i>	&nbsp; INSTAGRAM
                </Button>
                <Button as={Col}   className="text-light p-3 text-middle border-0" style={{fontSize:"12px",wordSpacing:"2px",backgroundColor:'#25D366'}}>
                <i class='fab fa-whatsapp'></i> &nbsp; WHAT'S APP
                </Button>
                <Button as={Col}   className="text-light p-3 text-middle border-0" style={{fontSize:"12px",wordSpacing:"2px",backgroundColor:'red'}}>
                <i class='fab fa-pinterest'></i> &nbsp; PINTREST
                </Button>
                <Button as={Col}   className="text-light p-3 text-middle border-0" style={{fontSize:"12px",wordSpacing:"2px",backgroundColor:'black'}}>
                <i class='fab fa-github'></i>	&nbsp; GIHUB
                </Button>
                </Row>
            </Container>
        )
    }
}

export default ButtonGroupTwo
