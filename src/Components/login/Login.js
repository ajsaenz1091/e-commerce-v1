import {useState} from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './Login.styles.scss'

const Login = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
      });

    const { email, password } = userCredentials;

    const handleChange = (e) => {
        setCredentials({...userCredentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        }
        fetch('http://localhost:3001/login', config)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return(
        <div className='sign-in'>
            <h2>I have an account already</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
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

                <CustomButton className='signup-login-button' type='submit' > Sign in </CustomButton>
                <CustomButton style={{backgroundColor: '#0088ff', color: 'white'}} className='signup-login-button' onClick={signInWithGoogle} > 
                    {' '}
                    Sign in with google {' '}
                </CustomButton>
            </form>
        </div>
    )
}

export default Login;