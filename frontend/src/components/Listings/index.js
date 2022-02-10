import './Listings.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';
import ListingCard from './ListingCard';

const Listings = () => {
    const listingId = useParams();
    const dispatch = useDispatch();
    const listingsObj = useSelector((state) => state.listings.entries);
    const listings = Object.values(listingsObj);

    useEffect(() => {
        dispatch(getListings());
        dispatch(loadCoverImages())
    }, [dispatch])


    return (
        <div className="listingsPage">
            <div className="leftSide">
                <ListingCard />
            </div>
            <div className="rightSide">
                Map intergration coming soon.
            </div>

        </div>
    )
};

export default Listings;