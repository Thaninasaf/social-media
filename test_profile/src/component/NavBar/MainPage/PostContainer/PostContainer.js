import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }
    getData=()=>{
       /* let json=[
            {
                "post_ID":1,
                "user_id":12345678,
                "user_img":"url...",
                "user_name":"Thanina Safia",
                "description":"Loved this wallpaper..",
                "post_img":post_img,
                "like":"24"
            },
            {
                "post_ID":2,
                "user_id":123445878,
                "user_img":"url...",
                "user_name":"Nina Safia",
                "description":"tet description",
                "post_img":"",
                "like":"24"
            }
        ]*/


        const thisContext=this;
        fetch("http://localhost:8080/api/postService/getPost")
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
            <div>
               
               {/*} //i added this to resolve errors
                */}

                    {this.state.data.map((item) => (
                       
                        <Post object={item} />
                     ))
                }
                
            </div>

         );
    }
}
 
export default PostContainer;
