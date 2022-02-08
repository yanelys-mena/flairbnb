import { useParams } from 'react-router-dom';
import './ListingDetail.css';

const ListingDetail = () => {
    const listingId = useParams();
    console.log(listingId.listingId)

    return (
        <div className='detailPage'>
            LISTING DETAIL
            <li>{listingId.listingId}</li>
        </div>
    )
};

export default ListingDetail;