import React,{Component} from 'react'
import {Card,Col} from 'react-bootstrap'
import Axios from 'axios';



class Lines extends Component{
    constructor(props){
        super(props);
        this.state = {
            _id : this.props._id,
            lineName : this.props.lineName,
            minCall : this.props.minCall,
            internetMin : this.props.internetMin,
            OutMin : this.props.OutMin
        }
    }
    

    addLine = ()=>{
        let obj = {
            id : this.state._id
        }

        Axios.post('http://localhost:5000/users/addLine',obj)
        .then((data)=>{
            console.log(data);
        })
    }

  
    render(){
      
        return(
                 <Col>
                 <Card bg="primary" text="white" style={{ width: '18rem' }}>
                    <Card.Header>{this.state.lineName}</Card.Header>
                    <Card.Body>
                    <Card.Title>{this.state.lineName}</Card.Title>
                    <Card.Text>
                        min : {this.state.lineName}<br/>
                        giga : {this.state.internetMin}<br/>
                        out min : {this.state.OutMin}<br/>
                        <input type="button" value="add line" onClick={this.addLine}/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
              
        )
    }
}

export default Lines