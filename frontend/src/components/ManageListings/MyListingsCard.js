import './ManageListings.css';
import { Link } from 'react-router-dom';
import { load_bookings } from '../../store/bookings';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';


const MyListingCard = ({ listing }) => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state?.bookings);
    const bookedListings = Object.values(bookings).filter(booking => booking.listingId === listing.id);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        dispatch(load_bookings());
    }, [dispatch])


    return (
        <Link to={`/listings/${listing.id}`} >
            <div id="myListingCard">
                <div><img src={listing?.Images[0].url}></img></div>
                <article id="topCardText">
                    <p>{listing.name} </p>
                    <p>${listing.price} / night</p>
                </article>
                <article id="bottomCardText">

                    <span>{listing.city}, {listing.state}</span>
                    <span>See bookings</span>
                </article>
            </div >
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SeeBookingsModal bookings={bookedListings} />
                </Modal>
            )}
        </Link>
    )
}

export default MyListingCard;
