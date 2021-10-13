import React, { Component } from 'react'
import axios from 'axios'
import { Row , Col , Card , Container} from 'react-bootstrap';
const client=axios.create({
    baseURL:"http://localhost:30001/Product"
});
export class Projucts extends Component {

    constructor(props){
        super(props)
        this.state={
            dataList:[]
        }
    }
    async componentDidMount(){
        let res=await client.get();
        this.setState({
            dataList:res.data
        })
    }
    render() {
        return (
            <Container fluid>
            <Row className="g-3">
            {this.state.dataList.map((val)=>
                <Col md={2}>
                    <Card className="text-center px-3 border-0 shadow" >
                    <Card.Img variant="top" src={val.img} height="200px" />
                    <Card.Body>
                        <Card.Title style={{fontSize:"12px"}}>{val.pname}</Card.Title>
                        <Card.Text className="text-danger" style={{fontSize:"12px"}}>
                        $ {val.price}.00
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            )}
            </Row>
            </Container>
        )
    }
}

export default Projucts;
