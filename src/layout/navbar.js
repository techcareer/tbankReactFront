import React,{Component} from 'react'
import {Button,Navbar,Nav,Form,FormControl} from 'react-bootstrap'
import {BrowserRouter as Router ,Redirect, Route } from 'react-router-dom'
import Register from '../users/register'
import Login from '../users/Login'
import Lines from '../Lines/Lines'
import axios from 'axios'
import '../Lines/Lines.css'

class Navigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : ''
        }
    }

    
    componentDidMount(){
        axios.get('http://localhost:5000/users/me')
        .then((result)=>{
            console.log(result)
            if(result.data.user){
                this.setState({user : "שלום יוזר רשום"})
            }
            else{
                this.setState({user : "שלום אורח"})
            }
        })
    }
   

  
    render(){
        return(
            <div>
                <Router>
                 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Register">Register</Nav.Link>
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/Lines">Add Line</Nav.Link>

                        </Nav>
                        
                    <Form inline>
                    <h1>{this.state.user}</h1>
                    </Form>
                </Navbar>
                <Route  path="/Register" component={Register}/>
                <Route  path="/Lines" component={Lines}/>
                <Route  path="/Login" component={Login}/>

                </Router>
            </div>
        )
    }
}

export default Navigator