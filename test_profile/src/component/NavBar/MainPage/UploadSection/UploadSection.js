import React, { Component } from 'react'
import "./UploadSection.css";
import { Avatar, Paper } from '@mui/material';
import image from "../../../../images/image.png";
import { Dialog } from '@mui/material';
import {getImage} from "../../../../GetImage";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


    class UploadSection extends Component {
        constructor(props) {
            super(props);
            this.state = {  
                open :false,
                uploadImage: null,
                description: null
            }
        }



        handleClose =()=>{
            this.setState({open:false});
        }

        openDialog =(event)=>{
            this.setState({open: true});
            this.setState({uploadImage: URL.createObjectURL(event.target.files[0])});
            this.setState({image: event.target.files[0]});

        }
        
        uploadToFirebase = () => {
    
        const thisContext=this;
        const storage = getStorage();
        const storageRef = ref(storage, "images/" + this.state.image.name);
        const uploadTask = uploadBytesResumable(storageRef, this.state.image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
            // Handle upload progress or state changes here
            },
            (error) => {
            // Handle unsuccessful uploads
            },
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                // Handle successful upload and get the download URL
                let payload = {
                    "userID": JSON.parse(localStorage.getItem("user")).userID,
                    "userName": JSON.parse(localStorage.getItem("user")).userName,
                    "description": thisContext.state.description,
                    "postImgURL" : downloadURL

                }

                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                };

                fetch("http://localhost:8080/api/postService/save",requestOptions)
                .then(response => response.json())
                .then(data => {
                thisContext.setState({open: false});
                thisContext.props.update();
                    
                })
                .catch(error =>{

                })

            
            
            }).catch((error) => {
                // Handle errors while getting the download URL
            });
            }
        );
        };
        


        render() { 
            return ( 
                <div>
                    <Dialog  aria-labelledby="simple-dialog-title" className="upload__dialogbox" open={this.state.open}>
                        <div className="upload__header">
                            <div className="upload__text">Create Post</div>
                            <div className="upload__close"><span onClick={this.handleClose}>X</span></div>
                        </div>
                        <input type="text" className="upload__textbox" onChange={(event)=>this.state.description= event.currentTarget.value} placeholder="What's on your mind"/>
                        <img src={this.state.uploadImage} className="upload__preview" />
                        <input type="button" value="Post" onClick={this.uploadToFirebase} className="upload__button" />
                    </Dialog>

                    <Paper className='upload_coantainer'>
                        <div className='upload_top'>
                            <div>
                                <Avatar src={getImage(JSON.parse(localStorage.getItem("user")).userImage)} className='upload_img'/>  
                            </div> 
                            <div>
                                <input className='upload_box' placeholder="what's in your mind  " type='text'/> 
                            </div>
                        </div>
                        <div className='upload_botton'>
                            <div className='upload_tab'>
                                <label htmlFor="file-upload" className="upload_tab" >
                                    <img src={image} width="30px" className='upload__text'/>
                                    <div>Photo</div>
                                </label>
                                <input type="file" id="file-upload" onChange={this.openDialog} />
                            </div>

                        </div>
                    </Paper>
                </div>
            );
        }
    }
    
    export default UploadSection;