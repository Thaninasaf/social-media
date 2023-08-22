import React, { Component } from 'react'
import "./NavBar.css";
import { Grid } from '@mui/material'; 
import home from "../../images/home.svg";
import group from "../../images/groups.svg";
import { Avatar } from '@mui/material';
import {getImage} from "../../GetImage"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            image : JSON.parse(localStorage.getItem("user")).userImage
        }
    }

   
    
    render() { 
        const utilisateur = JSON.parse(localStorage.getItem("user")).userName;
        return ( 
        <div>
            <Grid container spacing={3} className="navbar__main">
                <div className="navbar__leftbar">
                    
                    <input className="navbar__search" type="text"  />
                </div>         
            
            <Grid item xs ={6}>
                <div className="navbar__container">
                    <div className="navbar__tabs active">
                        <img src={home} alt=""  height="30px" width="35px" />
                    </div>
                    <div className="navbar__tabs">
                        
                    </div>
                    <div className="navbar__tabs">
                       
                    </div>
                    <div className="navbar__tabs">
                    <a href={`http://localhost:8081/?utilisateur=${encodeURIComponent(utilisateur)}`}>Messenger</a>
                    </div>
                    <div className="navbar__tabs">
                        <img src={group} alt="" height="35px" width="35px" />
                    </div>
                </div>
            </Grid>
            <Grid item xs ={3}>
                <div className="navbar__right">
                    <div className="navbar__righttab"> 
                        <Avatar className="navbar__rightimg" src={getImage(this.state.image)} />
                        <div className="navbar__profilename">{JSON.parse(localStorage.getItem("user")).userName}</div>
                    </div>
                </div>
            </Grid>
        </Grid>
         
    </div> 
        );
    }
}
 
export default NavBar;