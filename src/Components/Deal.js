import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Deal extends Component {
    render() {
        return (
            <Container fluid className="my-5">
                <Row>
                    <Col md={6}>
                        <img src="/images/img.jpg" className="w-100 h-100"/>
                    </Col>
                    <Col md={6} className="p-3">
                    <h5>HOT DEALS</h5>
                    <i className='fas fa-circle text-info' style={{fontSize:'5px'}}></i>
                    <i className='fas fa-circle text-danger' style={{fontSize:'5px', marginLeft:'10px'}}></i>
                    <i className='fas fa-circle text-warning' style={{fontSize:'5px', marginLeft:'10px'}}></i>
                    <h1 style={{fontFamily: "'Merienda One', cursive",marginTop:' 25px'}}>Ian's Dark Grey T-Shirt</h1>
                    <i className="fa fa-star text-warning "  style={{fontSize:"12px"}}></i>
                    <i className="fa fa-star text-warning " style={{fontSize:"12px"}}></i>
                    <i className="fa fa-star text-warning " style={{fontSize:"12px"}}></i>
                    <i className="fa fa-star text-warning " style={{fontSize:"12px"}}></i>
                    <i className="fa fa-star text-warning " style={{fontSize:"12px"}}></i>
                    <span className="text-secondry " style={{fontFamily: "'Kaushan Script', cursive", marginLeft:'10px',fontSize:"12px"}}>(05 Reviews)</span>
                    <h1 className="text-danger mt-5">$230.00</h1>
                    <p className="text-dark " style={{lineHeight:'1.8'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque ea quia vel deserunt similique saepe aut minus magnam eos! Totam nisi officia illo perferendis fuga cum molestias adipisci saepe laborum, nesciunt impedit aut reiciendis exercitationem tempora id. Quibusdam, molestias!</p>
                    <i className='fas fa-chevron-right'> </i><span className="text-dark fw-bold" style={{fontSize: '16px'}}> COLOR : </span>
                    <i className='fas fa-circle text-info' style={{fontSize:'15px', marginLeft:'30px'}}></i>
                    <i className='fas fa-circle text-danger' style={{fontSize:'15px', marginLeft:'30px'}}></i>
                    <i className='fas fa-circle text-primary' style={{fontSize:'15px', marginLeft:'30px'}}></i>
                    <div className="mt-3">
                    <i className='fas fa-chevron-right'> </i><span className="text-dark fw-bold" style={{fontSize: '16px'}}> SIZE : </span>
                    <button className="btn btn-outline-secondary" style={{marginLeft:'49px'}}>S</button>
                    <button className="btn btn-outline-secondary" style={{marginLeft: '15px'}}>M</button>
                    <button className="btn btn-outline-secondary"  style={{marginLeft: '15px'}}>L</button>
                    <button className="btn btn-outline-secondary" style={{marginLeft: '15px'}}>XL</button>
                    </div>
                    <div className="d-flex">
                        <div className="bg-info text-center my-4 me-1 p-1" style={{height: '80px',  width: '80px'}}><h1 className="text-light">03</h1><p className="text-light " style={{fontFamily: "'Kaushan Script', cursive", marginTop:"-10px"}}>Days</p></div>
                        <div className="bg-info text-center my-4 mx-1  p-1" style={{height: '80px',  width: '80px'}}><h1 className="text-light">17</h1><p className="text-light " style={{fontFamily: "'Kaushan Script', cursive", marginTop:"-10px"}}>hours</p></div>
                        <div className="bg-info text-center my-4 mx-1 p-1" style={{height: '80px',  width: '80px'}}><h1 className="text-light">32</h1><p className="text-light " style={{fontFamily: "'Kaushan Script', cursive", marginTop:"-10px"}}>Minutes</p></div>
                        <div className="bg-info text-center my-4 mx-1 p-1" style={{height: '80px',  width: '80px'}}><h1 className="text-light">09</h1><p className="text-light " style={{fontFamily: "'Kaushan Script', cursive", marginTop:"-10px"}}>Seconds</p></div>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Deal
