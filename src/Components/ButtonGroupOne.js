import React, { Component } from 'react'
import { Col, Container, Row , Button } from 'react-bootstrap'

export class ButtonGroupOne extends Component {
    render() {
        return (
            <Container fluid className="my-4">
                <Row>
                <Button as={Col} variant="info"  className="text-light p-3 text-middle" style={{fontSize:"12px",wordSpacing:"2px"}}>
                    <span className="fa fa-plane"></span> FREE SHIPING WORLDWIDE
                </Button>
                <Button as={Col} variant="danger" className="mx-4 text-light p-3 text-middle" style={{fontSize:"12px",wordSpacing:"2px"}}>
                    <span className="fas fa-sync-alt"></span> 100 % MONEY BACK IN 48 HRS
                </Button>
                <Button as={Col} variant="warning" className="text-light p-3 text-middle" style={{fontSize:"12px",wordSpacing:"2px"}} >
                    <span className="far fa-clock"></span> 24/7 ONLINE CUSTOMER SUPPORT
                </Button>
                </Row>
            </Container>
        )
    }
}

export default ButtonGroupOne
