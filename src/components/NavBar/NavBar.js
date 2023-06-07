import React, { Component } from "react";
import "./NavBar.css"
import Grid from "@mui/material/Grid";
import insta_logo from '../../images/instagram_logo.png';

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state ={ }
    }
    render() {
        return (
            <div>
                <div className="navbar__barContent">
                    <Grid container>

                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={3}>
                            <img className="navbar_logo" alt="#" src={insta_logo} width="105px"/>
                        </Grid>
                        <Grid item xs={3}>
                            <input text="text" placeholder="Search"/>
                        </Grid>

                        <Grid item xs={3} style={{"display":"flex"}}>
                            <img alt="#" src={home} width="25px"/>
                            <img alt="#" src={message} width="25px"/>
                            <img alt="#" src={find} width="25px"/>
                            <img alt="#" src={react} width="25px"/>
                        </Grid>

                        <Grid item xs={1}>
                            
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default NavBar;