import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import './loginpage.css';
import insta_image from '../../images/insta_image.png';
import insta_logo from '../../images/instagram_logo.png';
import fb from '../../images/logo_face.png';
import appstore from '../../images/appstore.png';
import playstore from '../../images/playstore.png';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}> </Grid>

                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img  alt="#" src={insta_image} width="450"/>
                            </div>
                        <div>
                        <div className="loginpage_rightcomponent">
                                <img className="loginpage__logo" alt="#" src={insta_logo}/>
                                <div className="loginPage__sigIn">
                                <input className="loginpage__text" type="text" placeholder="Phone number, username or email"/>
                                <input className="loginpage__text" type="password" placeholder="password"/>
                                <button className="login__button">Sign In</button>
                            </div>
                            <div className="login__ordiv">
                                <div className="login__division"></div>
                                <div className="login__or">OR</div>
                                <div className="login__dividor"></div>
                            </div>
                            <div className="login__fb">
                                <img alt="#"src={fb} width="15px" style={{"marginRight":"5px"}}/> Log in with Facebook
                            </div>
                            <div className="login__forgot">
                                Forgot Password ?
                            </div>
                        </div>
                        

                        <div className="loginpage__signupoption">
                            <div className="loginPage__signIn">
                                Don't have an account? Sign up
                            </div>
                            <div className="loginPage__downloadSection">
                                <div>
                                Get the App
                                </div>
                            </div>
                        
                        <div className="loginPage__option">
                            <img className="loginPage__dwing" alt="#" src={appstore} width="136px"/>
                            <img alt="#" src={playstore} width="136px"/>
                        </div>
                        </div>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}> </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;