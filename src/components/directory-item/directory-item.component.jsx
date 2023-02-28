import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {

    const { id, imageUrl, title } = category;

    return (
        <div className="directory-item-cont" key={id}>
            <div
                className='bg-img'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className="directory-item-body-cont">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default DirectoryItem;