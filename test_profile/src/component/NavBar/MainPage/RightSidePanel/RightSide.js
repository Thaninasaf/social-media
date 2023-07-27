import React, { Component } from 'react';
import "./RightSide.css";
import ImageLayout from '../ImageLayout';

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
           
    }
    
    getData=()=>{//fake message 
      /*  let jsondata=[
            {
                "image":{pict},
                "text":" Safia Thanina"
            },
            {
                "image":{pict},
                "text":" Safia Thanina"
            },
            {
                "image":{pict},
                "text":" Safia Tina"
            }
        ];*/
        const thisContext=this;
        fetch("http://localhost:8080/api/userService/getUserDetails")
        .then(response => response.json())
        .then(json => {
            thisContext.setState({data : json});
        })
        .catch(error =>{

        })


    }
    
    componentDidMount(){
        this.getData();
    }


    render() { 
        return ( 
            <div className='rightside_container'>
                <div className='rightside_header'>
                    Contact
                </div>
                <div className='rightside_content'> 
                 
                 {
                        this.state.data.map((item) => (
                            <ImageLayout image={item.userImage} status={item.active} text={item.userName} />
                        ))
                    }

                </div>
            </div>
         );
    }
}
 
export default RightSide;