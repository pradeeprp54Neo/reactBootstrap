import React, { Component } from 'react'
import { Container, Row ,Col,Button} from 'react-bootstrap'
import axios from 'axios'
const client=axios.create({
    baseURL:"http://localhost:30001/Product"
});

export class HandPick extends Component {
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
                <Row>
                    <Col md={4}>
                        <div className="bg-white p-2 overflow-auto w-100" style={{height:'500px'}}>
                        <h5 className="text-center border  border-end-0 border-start-0 border-top-0 border-2 border-secondary pb-3">BEST SELLERS</h5>
                        {this.state.dataList.map((val)=>
                            <div className="w-100 my-4 p-0 d-flex" style={{height: '25%'}}>
                            <div className="w-30 h-100 border">
                              <img src={val.img} height="120px" width="125px" />
                            </div>
                            <div className="w-70 h-100 py-1 px-3 ">
                            <p className=" fw-bold"style={{marginBottom: '-4px'}}>{val.pname}</p>
                            <p className="m-0">
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                            </p>
                            <p className="text-danger fw"> ${val.price-100}.00</p>
                            <Button variant="info" className=" p-1 text-light" style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-shopping-cart navText'></i></Button>
                            <Button variant="outline-dark" className=" p-1 ms-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-sync-alt navText'></i></Button>
                            <Button variant="outline-dark" className=" p-1 ms-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='far fa-heart navText'></i></Button>
                            <Button variant="outline-dark" className=" ms-1 p-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-eye navText'></i></Button>
                          </div>
                        </div>
                
            )}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="bg-white p-2 overflow-auto w-100 shadow" style={{height:'500px'}}>
                        <h5 className="text-center border  border-end-0 border-start-0 border-top-0 border-2 border-secondary pb-3">BEST RATED</h5>
                        {this.state.dataList.map((val)=>
                            <div className="w-100 my-4 p-0 d-flex" style={{height: '25%'}}>
                            <div className="w-30 h-100 border">
                              <img src={val.img} height="120px" width="125px" />
                            </div>
                            <div className="w-70 h-100 py-1 px-3 ">
                            <p className=" fw-bold"style={{marginBottom: '-4px'}}>{val.pname}</p>
                            <p className="m-0">
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp;</i>
                            </p>
                            <p className="text-danger fw"> ${val.price-150}.00</p>
                            <Button variant="info" className=" p-1 text-light" style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-shopping-cart navText'></i></Button>
                            <Button variant="outline-dark" className=" p-1 ms-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-sync-alt navText'></i></Button>
                            <Button variant="outline-dark" className=" p-1 ms-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='far fa-heart navText'></i></Button>
                            <Button variant="outline-dark" className=" ms-1 p-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-eye navText'></i></Button>
                          </div>
                        </div>
                
            )}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="bg-white p-2 overflow-auto w-100" style={{height:'500px'}}>
                        <h5 className="text-center border  border-end-0 border-start-0 border-top-0 border-2 border-secondary pb-3">TOP SPECIAL</h5>
                        {this.state.dataList.map((val)=>
                            <div className="w-100 my-4 p-0 d-flex" style={{height: '25%'}}>
                            <div className="w-30 h-100 border">
                              <img src={val.img} height="120px" width="125px" />
                            </div>
                            <div className="w-70 h-100 py-1 px-3 ">
                            <p className=" fw-bold"style={{marginBottom: '-4px'}}>{val.pname}</p>
                            <p className="m-0">
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} > &nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} > &nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} > &nbsp;</i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} >&nbsp; </i>
                              <i className="fa fa-star text-warning " style={{fontSize: "8px"}} > &nbsp;</i>
                            </p>
                            <p className="text-danger fw"> ${val.price-89}.00</p>
                            <Button variant="info" className=" p-1 text-light" style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-shopping-cart navText'></i></Button>
                            <Button variant="outline-dark" className=" p-1 ms-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-sync-alt navText'></i></Button>
                            <Button variant="outline-dark" className=" p-1 ms-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='far fa-heart navText'></i></Button>
                            <Button variant="outline-dark" className=" ms-1 p-1"style={{width:'35px', height:"35px", fontSize:'12px'}}><i className='fas fa-eye navText'></i></Button>
                          </div>
                        </div>
                
            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HandPick;
