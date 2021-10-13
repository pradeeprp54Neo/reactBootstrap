import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const insta=[1,2,3,4,5,6];
export class Instagram extends Component {
    render() {
        return (
            <Container fluid>
            <Row className="text-center">
                <Col md={12}><h5>INSTAGRAN</h5></Col>
                <Col md={12}>
                <i class='fas fa-angle-double-right' style={{fontSize:'24px'}}></i>&nbsp;
                <i class='fas fa-angle-double-right' style={{fontSize:'24px'}}></i>&nbsp;
                <i class='fas fa-angle-double-right' style={{fontSize:'24px'}}></i>&nbsp;
                <i class='fas fa-angle-double-right' style={{fontSize:'24px'}}></i>&nbsp;
                <i class='fab fa-instagram' style={{fontSize:'24px'}}></i>	&nbsp;
                <i class='fas fa-angle-double-left' style={{fontSize:'24px'}}></i>&nbsp;
                <i class='fas fa-angle-double-left' style={{fontSize:'24px'}}></i>&nbsp;
                <i class='fas fa-angle-double-left' style={{fontSize:'24px'}}></i>&nbsp;
                <i class='fas fa-angle-double-left' style={{fontSize:'24px'}}></i>
                </Col>
            </Row>
            <Row className="g-2  my-3">
                {insta.map((i)=>
                    <Col md={2} className="shadow-sm">
                        <img src={`images/insta${i}.jpg`} style={{height:'200px', width: '200px'}} />
                    </Col>
                )}
            </Row>
            </Container>
        )
    }
}

export default Instagram
