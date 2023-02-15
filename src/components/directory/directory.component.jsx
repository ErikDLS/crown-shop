import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'

const directory = ({categories}) => {
    return (
        <div className="directory-cont">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}></CategoryItem>
            ))}
        </div>)
}

export default directory;