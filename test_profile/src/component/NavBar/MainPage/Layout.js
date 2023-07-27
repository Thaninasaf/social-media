import React, { Component ,createRef } from 'react';
import "./MainPage.css";
import { Grid } from '@mui/material';

import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.childRef = createRef();
        this.state = {  }
    }

    letUpdate =() =>{
        //changed cause error
        this.childRef.current.getData();
    }
    
    render() { 
        return ( 
            <div className='mainpage_conatainer'>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        
                    </Grid>
                    <Grid item xs={6} className='midllecontainer' >
                        <StatusBar/>
                        <UploadSection update={this.letUpdate}/>
                        <PostContainer ref={this.childRef}/>

                    </Grid>
                    <Grid item xs={3}>
                        <RightSide/>
                    </Grid>

                </Grid>

            </div>
         );
    }
}
 
export default Layout;
