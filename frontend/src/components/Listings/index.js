import './Listings.css'
import { useEffect } from 'react';
import { Route, Switch, useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';
import ListingDetail from '../ListingDetail';

const Listings = () => {
    const listingId = useParams();
    const dispatch = useDispatch();
    const listings = useSelector((state) => state.listings.entries);
    // listings.forEach(listing => console.log(listing));

    useEffect(() => {
        dispatch(getListings());
    }, [dispatch])

    return (
        <div className="listingsPage">
            <h3>This is the Listings Page</h3>
            {listings && listings.map(listing =>
                <div key={listing.id}>
                    <NavLink to={`/listings/${listing.id}`} key={listing.id}>{listing.name}</NavLink>
                </div>

            )}

            <Switch>
                <Route path="/listings/:listingId">
                    <ListingDetail ></ListingDetail>
                </Route>
            </Switch>
        </div>
    )
};

export default Listings;