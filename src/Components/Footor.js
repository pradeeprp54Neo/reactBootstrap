import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class Footor extends Component {
    render() {
        return (
            <Container fluid className="bg-dark text-center" style={{ padding: '3rem 12rem'}}>
            <img src="images/p6.jpg" className="rounded-pill" height="50px" width="100px" /><br/><br/>
            
            <p className="text-light d-inline navText" style={{fontFamily:"'Merienda One', cursive",fontSize:"12px", lineHeight: '2'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus voluptas amet, numquam eos recusandae eius laboriosam ut debitis, praesentium est dolorum voluptates vel veniam nulla! Deserunt nesciunt odio asperiores.</p><br/>
            
            <i className='fas fa-circle text-info' style={{fontSize:'5px' }}></i>
            <i className='fas fa-circle text-danger' style={{fontSize:'5px', marginLeft:'10px'}}></i>
            <i className='fas fa-circle text-warning' style={{fontSize:'5px', marginLeft:'10px'}}></i>
            <br/><br/>
            <img src="images/p.jpg" height="35px" width="40px" className="m-1" />
            <img src="images/p2.jpg" height="35px" width="40px" className="m-1"/>
            <img src="images/p3.jpg" height="35px" width="40px" className="m-1"/>
            <img src="images/p4.jpg" height="35px" width="40px" className="m-1"/>
            <img src="images/p7.jpg" height="35px" width="40px" className="m-1"/>

            </Container>
        )
    }
}

export default Footor
