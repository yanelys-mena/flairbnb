import { load_bookings } from '../../store/bookings';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllListings } from '../../store/listings';
import { delete_booking } from '../../store/bookings';
import './Trips.css';
import '../Listings'
import TripCard from './TripCard';
import dayjs from "dayjs";

const Trips = () => {
    const user = useSelector((state) => state.session.user);
    const bookings = useSelector((state) => Object.values(state?.bookings).filter(booking => booking?.userId === user?.id));
    const dispatch = useDispatch();
    const listings = useSelector((state) => state?.listings);
    const history = useHistory()

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    })


    useEffect(() => {
        dispatch(getAllListings());
        dispatch(load_bookings())
        window.scrollTo(0, 0);
    }, [dispatch])


    const handleDelete = (bookingId) => {
        dispatch(delete_booking(bookingId))
    }

    return (
        <>

            {
                <div id="trips_page">
                    <div id="your_trips">Your Trips</div>
                    <div id="trips_list">
                        {bookings.length ? <>
                            {bookings?.map(booking =>
                                <div id="trip_card_container" key={booking.id}>
                                    <TripCard listing={listings[booking?.listingId]} />
                                    <div id="reservations_info">
                                        <div>
                                            Dates: {`${dayjs(booking.startDate).format("MMM DD")} - ${dayjs(booking.endDate).format("MMM DD")}`}
                                        </div>
                                        <div>
                                            {dayjs(booking.endDate).diff(dayjs(booking.startDate), 'day') - 1} Nights
                                        </div>
                                        <div>
                                            ${(dayjs(booking.endDate).diff(dayjs(booking.startDate), 'day') - 1) * booking.Listing?.price} Total
                                        </div>
                                        <div id="cancel_reservation" onClick={() => handleDelete(booking.id)}>
                                            Cancel Reservation
                                        </div>
                                    </div>
                                </div>)}

                        </>
                            : <div id="no_trips">No Trips Booked.<Link to="/listings">Explore places.</Link></div>}
                    </div>


                </div >
            }
        </>
    )
}

export default Trips;