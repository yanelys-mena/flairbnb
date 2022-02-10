import './Listings.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';
import { getReviews } from '../../store/reviews';

import ListingCard from './ListingCard';

const Listings = () => {
    const listingId = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getListings());
        dispatch(loadCoverImages());

    }, [dispatch])


    return (
        <div className="listingsPage">
            <div className="leftSide">
                <ListingCard listingId={listingId} />
            </div>
            <div className="rightSide">
                Map integration coming soon.
            </div>

        </div>
    )
};

export default Listings;