import './Listings.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';
import { getReviews } from '../../store/reviews';
import ListingCard from './ListingCard';

const Listings = () => {
    const dispatch = useDispatch();
    const listingsObj = useSelector((state) => state.listings.entries);
    const listings = Object.values(listingsObj);
    console.log(listings)

    useEffect(() => {
        dispatch(getListings());
        dispatch(loadCoverImages());

    }, [dispatch])


    return (
        <div className="listingsPage" id="listingsPage">
            <div className="leftSide">
                {listings && listings.map(listing => <ListingCard key={listing.id} listing={listing} />)}

            </div>
            <div className="rightSide">
                Map integration coming soon.
            </div>

        </div>
    )
};

export default Listings;