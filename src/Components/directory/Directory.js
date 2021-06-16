import React, {useState} from 'react'
import MenuItem from '../menu-item/MenuItem'
import sectionsData from './directory.data'
import './Directory.styles.scss'


const Directory = ({setCollectionId}) => {

    const [sections, setSections] = useState(sectionsData)

    const renderMenuItems = () => {
        return sections.map((section, idx) => {
            return <MenuItem  key={idx} {...section} setCollectionId={setCollectionId} />
        })
    }

    return(
        <div className="directory-menu">
            {renderMenuItems()}
        </div>
    )
}

export default Directory
