import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

const Logout = ({ setCurrentUser }) => {

    const history = useHistory()

    useEffect(() => {
        let config = {
            method: 'DELETE'
        }

        fetch('/logout', config)
        handleLogout()
    })
    
    const handleLogout = () => {
        setCurrentUser(null)
        setTimeout(() => {
            history.push('/signup')
        }, 2000)
    }

    return(
        <div>
            <br/>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Logout