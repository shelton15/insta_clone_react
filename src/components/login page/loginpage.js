import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import './loginpage.css';
import insta_image from '../../images/insta_image.png';
import insta_logo from '../../images/instagram_logo.png';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        Hello
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img  alt="#" src={insta_image} width="450"/>
                            </div>
                        </div>
                        <div className="loginpage_rightcomponent">
                        <img className="loginpage__logo" alt="#" src={insta_logo}/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        Shelton
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;