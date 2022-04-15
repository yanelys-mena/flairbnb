import './Listings.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';
import ListingCard from './ListingCard';
import MapContainer from '../Maps';

const Listings = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.session?.user?.id);
    const listings = useSelector((state) => state?.listings);


    useEffect(() => {
        dispatch(getAllListings());
        dispatch(loadCoverImages());

    }, [dispatch])

    return (
        <div className="listingsPage" id="listingsPage">
            <div className="leftSide">

                {Object.values(listings).map(listing => <ListingCard key={listing.id} listing={listing} />)}

            </div>
            <div className="rightSide">
                <MapContainer listings={listings} />
            </div>

        </div>
    )
};

export default Listings;