import React from 'react'
import Signup from '../../Components/signup/Signup'
import './SignupLogin.styles.scss'
import Login from '../../Components/login/Login'


const SignupLogin = () => {

    return(
        <div className="div signup-login">
            <Signup />
            <Login />
        </div>
    )
}

export default SignupLogin;