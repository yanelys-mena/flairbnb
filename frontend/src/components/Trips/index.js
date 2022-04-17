import './Trips.css';
import { load_bookings } from '../../store/bookings';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TripCard from './TripCard';
import { getAllListings } from '../../store/listings';
import { delete_booking } from '../../store/bookings';

import '../Listings'
import dayjs from "dayjs";

const Trips = () => {
    const user = useSelector((state) => state.session.user);
    const bookings = useSelector((state) => Object.values(state?.bookings).filter(booking => booking?.userId === user?.id));
    const dispatch = useDispatch();
    const listings = useSelector((state) => state?.listings);

    useEffect(() => {
        dispatch(getAllListings());
        dispatch(load_bookings())
    }, [dispatch])


    const handleNights = (start, end) => {
        end.diff(start, 'day')
    };

    const handleDelete = (bookingId) => {
        dispatch(delete_booking(bookingId))
    }

    return (
        <>

            {bookings.length &&
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
                            : 'No Trips Booked.'}
                    </div>


                </div >
            }
        </>
    )
}

export default Trips;