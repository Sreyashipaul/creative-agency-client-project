import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import { handleGoogleSignIn, initializeFirebase } from './LoginManager';
const Login = () => {
    initializeFirebase();

   //User Context
   const {setLoggedInuser} = useContext(UserContext);

   //History and location method
   let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   // Handle Google SignIn button
   const googleSignIn = () => {
       handleGoogleSignIn()
       .then( res => {
            setLoggedInuser(res);
           history.replace(from);
       })
   }

    return (
        <div>
            <div className="login-area">
        <Container> 
             <div className="logo-area"> 
                 <Link to="/"> 
                  <img style={{height: '50px',maxWidth: '150px'}} className="img-fluid" src="https://i.ibb.co/6DdQDrX/logo.png" alt=""/>
                 </Link>
             </div>
             <div className="login-form"> 
                 <h2>Login With</h2>
                 <div onClick={googleSignIn} className="google-login"> 
                     <div className="google-img"> 
                         <img 
                          style={{ width: "25px" }}
                          className="mr-5 ml-1"
                          src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png"
                          alt="google logo"/>
                     </div>
                     <div className="google-text">
                         <p>Continue with Google</p>
                     </div>
                 </div>
                 <div className="create-account-area"> 
                     <p className="text-center">Don’t have an account? <span>Create an account</span></p>
                 </div>
             </div>
        </Container>
     </div>
        </div>
    );
};

export default Login;