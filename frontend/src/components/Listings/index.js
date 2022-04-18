import './Listings.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';
import ListingCard from './ListingCard';
import MapContainer from '../Maps';

const Listings = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.session?.user?.id);
    const listings = useSelector((state) => Object.values(state?.listings));
    const [hoveredListing, setHoveredListing] = useState(null);

    useEffect(() => {
        dispatch(getAllListings());
        dispatch(loadCoverImages());
    }, [dispatch])


    return (
        <div className="listingsPage" id="listingsPage">
            <div className="leftSide">
                {listings?.map(listing =>
                    <div key={listing?.id} id="listingsCard_div" onMouseEnter={(e) => setHoveredListing(listing)}>
                        <ListingCard
                            key={listing.id}
                            listing={listing}
                        />
                    </div>
                )}

            </div>
            <div className="rightSide">
                <MapContainer listings={listings} hoveredListing={hoveredListing} />
            </div>

        </div >
    )
};

export default Listings;