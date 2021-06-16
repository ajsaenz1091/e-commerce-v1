import React from 'react'
import { withRouter } from 'react-router'
import './MenuItem.styles.scss'


const MenuItem = ({imageUrl, linkUrl, title, history, match, id, setCollectionId}) => {

    const handleItemId = () => {
        setCollectionId(id)
    }

    return(
        <div  className="menu-item" onClick={() => {
            history.push(`${match.url}${linkUrl}`)
        }}>
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
            <div onClick={handleItemId} className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
