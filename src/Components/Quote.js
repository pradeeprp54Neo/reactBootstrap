import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class Quote extends Component {
    render() {
        return (
            <Container fluid className="text-center text-middle mt-4" style={{backgroundImage:`url("/images/footer-bg-1.jpg")` 
            ,backgroundPosition:' center', backgroundSize:' 100% 160%',padding: '3rem 12rem'}}>
                <img src="images/footer-rounded.jpg" className="rounded-circle" height="100px" width="100px" />
             <i className="fa fa-quote-left text-light text-start w-100 opacity-25" style={{fontSize:'24px'}}></i><br/>
              <p className="text-light d-inline" style={{fontFamily: "'Kaushan Script', cursive",lineHeight: '2'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus voluptas amet, numquam eos recusandae eius laboriosam ut debitis, praesentium est dolorum voluptates vel veniam nulla! Deserunt nesciunt odio asperiores.</p><br/>
              <i className="fa fa-quote-right text-light text-end w-100 opacity-25" style={{fontSize:'24px'}}></i>
              <p className="text-light mb-0">Graham Bill</p>
              <p className="text-light opacity-25 mt-0" style={{fontSize:'12px'}}>WEB DEVELOPER</p>
            </Container>
            
        )
    }
}

export default Quote
