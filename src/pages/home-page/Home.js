import Directory from '../../Components/directory/Directory'
import './Home.styles.scss'

const Home = ({setCollectionId}) => {

    return (
        <div className='homepage'>
            <Directory setCollectionId={setCollectionId}/>
        </div>
    )
}

export default Home;