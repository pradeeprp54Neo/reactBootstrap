import React, { Component } from 'react'
import { Carousel,Button } from 'react-bootstrap'
export class Casoroll extends Component {
    render() {
        return (
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100  "
                    style={{height:"50vh"}}
                    src="./images/courosel-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>The World of Extreme Sports</h1>
                    <h3>SAVE<i class="text-info"> 20%</i> ON ALL APPAREL</h3>
                      <Button variant="info" className="text-light px-4 py-2">Shop Now</Button>
                      
                      <br/><br/>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"50vh"}}
                    src="./images/couroael02.jpg"
                    alt="Second slide"
                    />

                    
                </Carousel.Item>


                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"50vh"}}
                    src="./images/courosel-3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Casoroll
