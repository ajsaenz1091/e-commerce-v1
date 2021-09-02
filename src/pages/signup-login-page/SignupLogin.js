import React from 'react'
import Signup from '../../Components/login/Login'
import './SignupLogin.styles.scss'
import Login from '../../Components/signup/Signup'


const SignupLogin = () => {

    return(
        <div className="signup-login">
            <Signup />
           <h1>Don't have one? Then... ===></h1>
            <Login />
        </div>
    )
}

export default SignupLogin;