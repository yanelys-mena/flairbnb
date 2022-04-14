import './ManageListings.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { useEffect, useState } from 'react';
import SeeBookingsModal from './SeeBookingsModal';
import { load_bookings } from '../../store/bookings';

const MyListingCard = ({ listing }) => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state?.bookings);
    const bookedListings = Object.values(bookings).filter(booking => booking?.listingId === listing?.id);
    const sorted = bookedListings.sort((a, b) => b.startDate - a.startDate)


    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(load_bookings());
    }, [dispatch])
    console.log('BOOKINGS FILTERED', bookedListings)
    console.log('SORTED', sorted)
    return (
        <>
            <div id="myListingCard">
                <Link to={`/listings/${listing.id}`} target="_blank" >
                    <div><img src={listing?.Images[0].url}></img></div>
                    <article id="topCardText">
                        <p>{listing.name} </p>
                        <p>${listing.price} / night</p>
                    </article>
                </Link>
                <article id="bottomCardText">
                    <span>{listing.city}, {listing.state}</span>
                    <span onClick={() => setShowModal(true)} id="see_bookings">See Bookings</span>
                </article>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SeeBookingsModal setShowModal={setShowModal} bookings={sorted} />
                </Modal>
            )}
        </>
    )
}

export default MyListingCard;
