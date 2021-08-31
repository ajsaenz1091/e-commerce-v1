import {useState} from 'react';

import './Login.styles.scss'

const Login = () => {
    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted form')
    }

    return(
        <div className='log-in'>
            <h2>Create an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="email" type="email" value={form.email} required />
                <label>EMAIL</label>
                <input onChange={handleChange} name="password" type="password" value={form.password} required />
                <label>PASSWORD</label>

                <input type="submit" value='Submit Form'/>
            </form>
        </div>
    )
}

export default Login;