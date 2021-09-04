import React from 'react'
import Signup from '../../Components/signup/Signup'
import './SignupLogin.styles.scss'
import Login from '../../Components/login/Login'


const SignupLogin = ({handleUserLoginAndSignup}) => {

    const test = (data) => {
        console.log(data)
    }

    return(
        <div className="signup-login">
            <Login handleUserLoginAndSignup={handleUserLoginAndSignup}/>
            <h1>Don't have one? Then...</h1>
            <Signup test={test} handleUserLoginAndSignup={handleUserLoginAndSignup}/>
            
        </div>
    )
}

export default SignupLogin;