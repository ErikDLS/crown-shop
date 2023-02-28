import DirectoryItem from '../directory-item/directory-item.component'
import './directory.styles.scss'

const Directory = ({categories}) => {
    return (
        <div className="directory-cont">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category}></DirectoryItem>
            ))}
        </div>)
}

export default Directory;