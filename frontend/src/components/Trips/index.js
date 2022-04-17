import './Trips.css';
import { load_bookings } from '../../store/bookings';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import TripCard from './TripCard';
import { getAllListings } from '../../store/listings';
import '../Listings'
import { Link } from 'react-router-dom';
import { loadCoverImages } from '../../store/images';
import dayjs from "dayjs";
var AdvancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(AdvancedFormat) // use plugin

// const diff = require('dayjs/plugin/dayjs#diff')
// dayjs.extend(diff)
// dayjs.extend(diff)

const Trips = () => {
    const user = useSelector((state) => state.session.user);
    const bookings = useSelector((state) => Object.values(state?.bookings).filter(booking => booking?.userId === user?.id));
    const dispatch = useDispatch();
    const listings = useSelector((state) => state?.listings);

    useEffect(() => {
        dispatch(getAllListings());
        dispatch(load_bookings())
    }, [dispatch])

    // console.log('testing', dayjs(bookings[0]?.startDate).format("YYYY-MM-DD"), 
    // dayjs().subtract(7, 'date'))


    const a = dayjs((bookings[0]?.startDate))
    const b = dayjs((bookings[0]?.endDate));
    // dayjs(dayjs(bookings[0]?.endDate).format("YYYY-MM-DD")).from(dayjs(bookings[0]?.startDate).format("YYYY-MM-DD"), true)
    // console.log('DATES DIFF', a.diff(b))

    const handleNights = (start, end) => {
        end.diff(start, 'day')
    }
    // 20214000000 default milliseconds
    // const coverImage =
    // console.log(bookings)
    return (
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
                                    ${(dayjs(booking.endDate).diff(dayjs(booking.startDate), 'day') - 1) * booking.Listing.price} Total
                                </div>
                                <div>
                                    Cancel Reservation

                                </div>
                            </div>
                        </div>)}

                </>
                    : 'No Trips Booked.'}
            </div>


        </div >
    )
}

export default Trips;