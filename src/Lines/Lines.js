import React,{Component} from 'react'
import axios from 'axios'
import Item from './LineItem'
import { Row, Col } from 'react-bootstrap';
import './Lines.css'
class Lines extends Component{
    constructor(props){
        super(props);
        this.state = {
            Lines : []
        }
    }

    
    componentDidMount(){
        axios.get('http://localhost:5000/cellPhone/getlines')
        .then((result)=>{
            this.setState({Lines : result.data})
        })
    }
   

    render(){
       let list = this.state.Lines.map((x)=>{
           return   <Item _id={x._id} lineName={x.lineName} minCall={x.minCall} internetMin={x.internetMin} OutMin={x.OutMin} />
       })
        return(
            <div>
                <Row className="right"> 
                {list}
                </Row>
              
            </div>
        )
    }
}

export default Lines