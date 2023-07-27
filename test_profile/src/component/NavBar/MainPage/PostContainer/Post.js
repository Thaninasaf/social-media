import React, { Component } from 'react';
import "./PostContainer.css";
import { Avatar, Paper } from '@mui/material';
import likebutton from "../../../../images/likebutton.png";
import commentbutton from "../../../../images/comment.png";
import {getImage} from "../../../../GetImage";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: [],
            comment:null,
            ////
            likes: this.props.object.likes
         }
    }

//////comment
        getData=()=>{
            const thisContext=this;
            fetch("http://localhost:8080/api/commentService/getAllComments/"+this.props.object.postID)
            .then(response => response.json())
            .then(json => {
                thisContext.setState({comments : json});
            })
            .catch(error =>{

            })
        }
        componentDidMount(){
            this.getData();
        }

//////


   isImageAvailable=(data)=>{
        return data==""?false:true;
    }
    //////submit comment
            submitComment=(event)=>{
                if(event.key == "Enter") {
                const thisContext=this;
                let payload = {
                    "postID" : this.props.object.postID,
                    "userID": JSON.parse(localStorage.getItem("user")).userID,
                    "userImage": JSON.parse(localStorage.getItem("user")).userImage,
                    "userName": JSON.parse(localStorage.getItem("user")).userName,
                    "comment" : this.state.comment
                }

                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                };

                fetch("http://localhost:8080/api/commentService/save",requestOptions)
                .then(response => response.json())
                .then(data => {
                    thisContext.getData();

                })
                .catch(error =>{

                })
            }
        }
    
    ////
    //////likePost
        likePost = () => {
            fetch(`http://localhost:8080/api/postService/like/${this.props.object.postID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        // Increment the likes count in the state
                        this.setState(prevState => ({ likes: prevState.likes + 1 }));
                    }
                })
                .catch(error => {
                    // Handle error
                });
        }
    /////

    render() { 
        return (  
            <div>
               <Paper className='post_container'>
                    {/*header */}
                    <div className='post_header'>
                        <div className='post_header_img'>
                             <Avatar src={getImage("dp1")} className="post_img" />
                        </div>
                        <div className='post_header_text'>
                            {this.props.object.userName}
                        </div>
                    </div>

                     {/*description */}
                     <div className='post_description'> {this.props.object.description} </div>
                      {/*images */}
                     <div className='post_image'>
                      
                        {
                            this.isImageAvailable(this.props.object.postImgURL) ? <img src={this.props.object.postImgURL} width='600px'/>:<span></span>
                        }
                       
                       
                     </div>
                     {/*comment count ??? */}

                     {/*like box */}
                     <div className='post_like'>
                        {/*<div className='post_tab'>
                            <div className='post_tabfirst'>
                                <img className='post_tablimg' src={likebutton}/>
                            </div>
                            <div className='post_tabletext'>
                                Like
                            </div>
                        </div>*/}
                        
                        <div className='post_tab'>
                            <div className='post_tabfirst'>
                                <img className='post_tablimg' src={likebutton} alt="Like" onClick={this.likePost} />
                            </div>
                            <div className='post_tabletext'>
                                {/* Display the post content */}
                                <p className='like_text'>{this.props.object.content}</p>
                                
                                {/* Display the likes count */}
                                <p className='like_text'>Likes: {this.state.likes}</p>
                            </div>
                        </div>
                        {/*/////// */}

                     
                        <div className='post_tab'>
                                <div className='post_tabfirst'>
                                    <img className='post_tablimg' src={commentbutton}/>
                                </div>
                                <div className='post_tabletext'>
                                    comment
                                </div>
                        </div>
                    </div>    
                    
                    
                      {/*comment box */}
                    <div className='upload_comment'>
                        <div className="comment__section">
                            {
                                this.state.comments.map((item,index)=>(
                                    index > this.state.comments.length-4 ?
                                        <div className="comment">
                                            <Avatar src={getImage(item.userImage)} className="comment_img" />
                                            <div  className="comment_text" >{item.comment}</div>
                                        </div> : <span></span>
                                ))
                            }
                            
                        </div>
                       
                       
                        <div className='upload_top'>
                            <div >
                                <Avatar src={getImage(JSON.parse(localStorage.getItem("user")).userImage)} className='upload_img'/>  
                            </div> 
                        <div>
                            <input onKeyDown={this.submitComment} onChange={(event)=>{this.state.comment=event.currentTarget.value}}  className="upload__box" placeholder="What's on your mind ?" type="text" /> 
                        </div>
                    </div>  
                </div>
               </Paper>
            </div>
        );
    }
}
 
export default Post;