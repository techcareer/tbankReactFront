import React,{Component} from 'react'
import {Row,Col,Container,Form,Button} from 'react-bootstrap'
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import axios from 'axios'

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            id : '',
            city : '',
            address : '',
            bday : '',
            password : ''
        }
    }

    valueChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    addUser = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/users/register',this.state)
        .then((result)=>{
            console.log(result)
            if(result.data){
                toast.success('register successfuly', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
            }
            else{
                toast.error('user exist', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
            }
        })
    }

    render(){
        console.log(this.state)
        return(
            <Container>
            <ToastContainer />
                <Row className="justify-content-md-center"> 
                <Form onSubmit={this.addUser}>
                    <Form.Row>
                        <Form.Group as={Col}>
                        <Form.Label>First Name : </Form.Label>
                        <Form.Control value={this.state.firstName} onChange={this.valueChange}  name="firstName" type="text" />
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Last Name : </Form.Label>
                        <Form.Control value={this.state.lastName} onChange={this.valueChange} name="lastName" type="text" />
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Id : </Form.Label>
                        <Form.Control name="id" value={this.state.id} onChange={this.valueChange} type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control  name="city" value={this.state.city} onChange={this.valueChange} type="text"/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" value={this.state.address} onChange={this.valueChange} type="text" />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>birth day : </Form.Label>
                            <Form.Control name="bday" value={this.state.bday} onChange={this.valueChange}  type="date" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Password : </Form.Label>
                            <Form.Control name="password" value={this.state.password} onChange={this.valueChange} type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default Register