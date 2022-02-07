import { useParams } from 'react-router-dom';
import './ListingDetail.css';

const ListingDetail = () => {
    const listingId = useParams();
    console.log(listingId.listingId)

    return (
        <>
            LISTING DETAIL
            <li>{listingId.listingId}</li>

        </>
        // <li>{id}</li>
    )
};

export default ListingDetail;