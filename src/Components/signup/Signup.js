import {useState} from 'react';
import FormInput from '../form-input/FormInput'

import './Signup.styles.scss'

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
        console.log('submitted form')
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
                <label>PASSWORD</label>

                <input type="submit" value='Submit Form'/>
            </form>
        </div>
    )
}

export default Signup;