import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadCoverImages } from '../../store/images';
import { getAllListings } from '../../store/listings';
import MyListingCard from './MyListingsCard';


const ManageListings = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.session?.user?.id);
    const listings = useSelector((state) => state?.listings);

    const userListings = Object.values(listings).filter(listing => listing.userId === id);

    useEffect(() => {
        dispatch(getAllListings());
        dispatch(loadCoverImages());
    }, [dispatch])


    return (
        <div id="manageListingsPage">
            {Object.values(userListings).map(listing => {
                return < MyListingCard key={listing.id} listing={listing} />
            })}
        </div>
    )
}

export default ManageListings;
