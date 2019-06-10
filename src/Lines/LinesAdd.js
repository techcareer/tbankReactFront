import React,{Component} from 'react'
import axios from 'axios'


class Navigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : ''
        }
    }

    
    componentDidMount(){
        axios.get('http://localhost:5000/cellPhone/getlines')
        .then((result)=>{
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
               
            </div>
        )
    }
}

export default Navigator