import './Listings.css'
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';
import ListingDetail from '../ListingDetail';

const Listings = () => {
    const listingId = useParams();
    const dispatch = useDispatch();
    const listingsObj = useSelector((state) => state.listings.entries);
    const listings = Object.values(listingsObj);

    useEffect(() => {
        dispatch(getListings());
    }, [dispatch])

    return (
        <div className="listingsPage">
            <h3>This is the Listings Page</h3>
            {listings && listings.map(listing =>
                <div key={listing.id}>
                    <Link to={`/listings/${listing.id}`} key={listing.id}>{listing.name}</Link>
                </div>

            )}
        </div>
    )
};

export default Listings;