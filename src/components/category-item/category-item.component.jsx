import './category-item.styles.scss'

const CategoryItem = ({ category }) => {

    const { id, imageUrl, title } = category;

    return (
        <div className="categories-cont">
            <div className="category-cont" key={id}>
                <div
                    className='bg-img'
                    style={{ backgroundImage: `url(${imageUrl})` }} />
                <div className="category-body-cont">
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;