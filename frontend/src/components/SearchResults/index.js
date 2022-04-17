import '../Listings/Listings.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';
import ListingCard from '../Listings/ListingCard';
import MapContainer from '../Maps';
import { load_bookings } from '../../store/bookings';

const SearchResults = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.session?.user?.id);
    const listings = useSelector((state) => state?.listings);
    const listingsArr = Object.values(listings)
    const [hoveredListing, setHoveredListing] = useState(null);
    const { location, guests, start, end } = useParams();
    const bookings = useSelector((state) => Object.values(state?.bookings));

    useEffect(() => {
        dispatch(getAllListings());
        dispatch(loadCoverImages());
        dispatch(load_bookings())

    }, [dispatch])


    let listingIds = [];
    let listingsWithBookings = {};
    let searchSet = new Set();
    let searchResults;


    const filteredResults = listingsArr.map(listing => {
        if ((location === listing.city.toLowerCase() || location === listing.state.toLowerCase()) && listing.guests >= guests) {
            if (listing.Bookings.length) {
                listingIds.push(listing.id)
                listingsWithBookings[listing.id] = listing
            } else if (listing.Bookings.length === 0) {
                searchSet.add(listing)
            }
        }
    }
    )



    bookings.forEach(b => {
        if (listingIds.includes(b.listingId)) {

            if (!(start >= b.startDate && start <= b.endDate
                || end >= b.startDate && end <= b.endDate)) {
                searchSet.add(listingsWithBookings[b.listingId])
            }
        }
    });
    searchResults = Array.from(searchSet)

    return (
        <div className="listingsPage" id="listingsPage">
            <div className="leftSide">
                {searchResults?.map(listing =>
                    <div id="listingsCard_div" onMouseEnter={(e) => setHoveredListing(listing)}>
                        <ListingCard
                            key={listing.id}
                            listing={listing}
                        />
                    </div>
                )}

            </div>
            <div className="rightSide">
                <MapContainer listings={searchResults} hoveredListing={hoveredListing} />
            </div>

        </div >
    )
};

export default SearchResults;