import { DirectoryItemContainer, DirectoryItemBodyContainer, BgImg } from './directory-item.styles';

const DirectoryItem = ({ category }) => {

    const { id, imageUrl, title } = category;

    return (
        <DirectoryItemContainer key={id} to={`shop/${title.toLowerCase()}`}>
            <BgImg imageUrl={imageUrl} />
            <DirectoryItemBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;