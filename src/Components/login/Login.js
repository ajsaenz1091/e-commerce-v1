import {useState} from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './Login.styles.scss'

const Signup = () => {
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
        // fetch('login')
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

                <CustomButton className='signup-login-button' type='submit' > Sing in </CustomButton>
                <CustomButton style={{backgroundColor: '#0088ff', color: 'white'}} className='signup-login-button' onClick={signInWithGoogle} > 
                    {' '}
                    Sign in with google {' '}
                </CustomButton>
            </form>
        </div>
    )
}

export default Signup;