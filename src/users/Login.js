import React,{Component} from 'react'
import {Button,Form,Container,Row,Col} from 'react-bootstrap'
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import axios from 'axios'



class Login extends Component{
    constructor(props){
        super(props);
        this.state= {
            id : '',
            password : ''
        }
    }


    valChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    Login = (e)=>{
        e.preventDefault()

            axios.post('http://localhost:5000/users/Login',this.state)
            .then((result)=>{
                console.log(result)
                if(!result.data){

                    toast.error('not connect', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                        });
                        // <Redirect/>
                }
                else{
                       // this.props.UpdateUser(result.data)
                        this.props.history.push('/register')
                }
            })
       
    }

    render(){
        console.log(this.state)
        return(
            <Container>
            <ToastContainer />

                <Row className="justify-content-md-center"> 
                    <Form onSubmit={this.Login}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Id : </Form.Label>
                            <Form.Control onChange={this.valChange} name="id" type="text" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.valChange} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default Login