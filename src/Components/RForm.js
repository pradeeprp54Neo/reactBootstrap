import React, { Component } from 'react'
import { Form, FloatingLabel,Button } from 'react-bootstrap'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName=RegExp(/^[A-Z a-z]{4,29}$/);
const regForPhone =RegExp(/^[7-9][0-9]{9}$/);
const regForPass =RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
const cityList=['delhi','mumbia','pune','chandighar','london','oxford','paris','new york','boston'];

export class RForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            phone:"",
            pass1:"",
            pass2:"",
            city:"",
            errors:{
                name:"",
                email:"",
                phone:"",
                pass1:"",
                pass2:"",
                city:""
            }
        }
        
    }
    handle(event){
        const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'name':
                    errors.name=regForName.test(value)?'':'Enter a vaild Name';
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Enter A Valid Email Address';
                    break;
                case 'phone':
                    errors.phone=regForPhone.test(value)?'':'Enter A Valid Mobile Number';
                    break;
                case 'pass1':
                    errors.pass1=regForPass.test(value)?'':'6-16 Digit Password Atleast One Uppercase Lowercase & Special Character ';
                    break;
                case 'pass2':
                    errors.pass2=this.state.pass1!=value?"Password Didn't Match!!!":'';
                    break;
                case 'city':
                    errors.city=(cityList.indexOf(value)+1)?'':'Our Service Is Not Avilable In Your City';
                    break;   
                break;
            }
            this.setState({errors,[name]:value
            })
    }
    validate(event){
        event.preventDefault();
        let{name,email,pass1,pass2,phone,city}=this.state;
        if(name==''||email==''||pass1==''||pass2==''||city==''||phone=='')
        {
            alert("Fill The Complete Form");
        }
        else if(this.valid(this.state.errors))
        {
            alert("Valid Form Submited");
        }
        else {
            alert("Invalid Form");
        }
     }
      valid(errors){
         let valid=true;
         Object.values(errors).forEach((val)=> val.length>0 && (valid=false));
         return valid;
     }
    render() {
        return (
            <Form style={{margin:"80px",fontFamily: "'Merienda One', cursive"}} onSubmit={this.validate.bind(this)}>
                <h1>Registration Form</h1><br/>
                <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                        <Form.Control type="text" name="name" placeholder="Paras Saxena" onChange={this.handle.bind(this)} />
                        <Form.Text  muted>{this.state.errors.name}</Form.Text>
                    </FloatingLabel>
                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" name="email" placeholder="name@example.com"onChange={this.handle.bind(this)} />
                        <Form.Text  muted>{this.state.errors.email}</Form.Text>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhone"  className="mb-3" label="Enter Phone">
                        <Form.Control type="number" name="phone" placeholder="9876541230" onChange={this.handle.bind(this)} />
                        <Form.Text  muted>{this.state.errors.phone}</Form.Text>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" className="mb-3" label="Create Password">
                        <Form.Control type="password"name="pass1" placeholder="Password"  onChange={this.handle.bind(this)}/>
                        <Form.Text  muted>{this.state.errors.pass1}</Form.Text>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" className="mb-3" label="R-Write Password">
                        <Form.Control type="password" name="pass2" placeholder="Password" onChange={this.handle.bind(this)} />
                        <Form.Text  muted>{this.state.errors.pass2}</Form.Text>
                    </FloatingLabel>
                    <FloatingLabel controlId="cityPassword" className="mb-3" label="Enter City">
                        <Form.Control type="text" name="city" placeholder="Delhi" onChange={this.handle.bind(this)} />
                        <Form.Text  muted>{this.state.errors.city}</Form.Text>
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    
            </Form>
        )
    }
}

export default RForm
