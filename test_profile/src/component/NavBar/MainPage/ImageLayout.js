import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import "./MainPage.css";
import { getImage } from '../../../GetImage';
import { Badge } from '@mui/material';


class ImageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className='imageLayout_container'>
                <div className='imageLayout_imglay'>

                {
                    this.props.status ? 
                    <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                        <Avatar className="imageLayout__img" src={getImage(this.props.image)} />
                    </Badge>
                    : this.props.status==false ?
                    <Avatar className="imageLayout__img" src={getImage(this.props.image)} />

                    :<Avatar className='imageLayout_img' src={this.props.images}/>
                }
                

                </div>
                
                
                
                <div className='imageLayout_text'>
                    {this.props.text}
                </div>
            </div>
         );
    }
}
 
export default ImageLayout;