import Directory from '../../Components/directory/Directory'
import './Home.styles.scss'

const Home = ({setCollectionId, currentUser}) => {

    return (
        <div className='homepage'>
            {currentUser ? <h3>Welcome {currentUser.username}!</h3>: null}
            <Directory setCollectionId={setCollectionId}/>
        </div>
    )
}

export default Home;