import {useState} from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './Signup.styles.scss'

const Signup = ({handleUserLoginAndSignup, test}) => {
    const [userCredentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
      });

    const { username, email, password } = userCredentials;

    const handleChange = (e) => {
        setCredentials({...userCredentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("WTF")
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        }
        fetch('/users', config)
        .then(resp => resp.json())
        .then(data => handleUserLoginAndSignup(data))        
    }

    return(
        <div className='sign-up'>
            <h2>Create an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    handleChange={handleChange} 
                    name="username" 
                    type="text" 
                    value={username} 
                    label='name'
                    required 
                />
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <CustomButton className='signup-login-button' type='submit' > Sign up </CustomButton>
            </form>
        </div>
    )
}

export default Signup;