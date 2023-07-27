import React, { Component } from 'react';
import "./StatusBar.css";
import {Paper} from '@mui/material';
import uploadIcon from "../../../../images/upload.png";
//import status1 from "../../../../images/pic2.jpeg";
//import uploadIcon from "../../../../images/upload.png";
import {storage} from "../../../../firebase";
import { getDownloadURL,ref,uploadBytesResumable } from 'firebase/storage';
 
class status extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    

    openDialogToUploadStatus =(event)=>{
        let image = event.target.files[0];

        if (image == undefined || image == null) return;

        const thisContext = this;
        const storageRef = ref(storage, `status/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
            // Handle upload progress or state changes here
            },
            (error) => {
            // Handle unsuccessful uploads
            },
            () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                // Handle successful upload and get the download URL
                let payload = {
                    "userID": JSON.parse(localStorage.getItem("user")).userID,
                    "userName": JSON.parse(localStorage.getItem("user")).userName,
                    "statusImageURL" : downloadURL
                };

                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                };

                fetch("http://localhost:8080/api/statusService/save",requestOptions)
                .then(response => response.json())
                .then(data => {
                    thisContext.props.refresh();
                })
                
            })
                .catch((error) => {
                // Handle errors while getting the download URL
                });
            }
        );
    };
    
    render() { 
        return ( 
            <div>
                {
                this.props.uploader == "true" ?

                <Paper className="statusbar__status">
                    <label htmlFor="file-upload-status" className="upload__tabs">
                        <img src={uploadIcon} className="upload__icon" />
                        </label>
                       <input type="file" id="file-upload-status" onChange={this.openDialogToUploadStatus} />

                </Paper>:

                <Paper className="statusbar__status">
                    <img src={this.props.object.statusImageURL} className="status__image" />       
                </Paper>


            }
            </div>
         );
    }
}
 
export default status;