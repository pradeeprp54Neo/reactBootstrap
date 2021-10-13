import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class CopyRight extends Component {
    render() {
        return (
            <div>
                <Container fluid className=" text-center p-3">
            <p style={{fontSize:"12px"}}>Copyright@2021 Designed by <span className="text-info">Paras Saxena</span> All Right Reserved</p>
           </Container>
            </div>
        )
    }
}

export default CopyRight
