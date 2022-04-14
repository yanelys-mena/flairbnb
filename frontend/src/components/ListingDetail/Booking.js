import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { load_bookings, add_booking } from '../../store/bookings'
import './Booking.css';

const Booking = ({ listing, sessionUser }) => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const bookings = useSelector((state) => state?.bookings);
    const bookedListings = Object.values(bookings).filter(booking => booking?.listingId === listing?.id);
    const [disabled, setDisabled] = useState('disabled');

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };


    useEffect(() => {
        dispatch(load_bookings())
    }, []);


    useEffect(() => {
        endDate ? setDisabled(false) : setDisabled('disabled');
    }, [endDate]);


    //  if startDate that is selected, existsed in bookedlistings.startDate == disable the button ||
    //  if the end date exists in bookedListings.endDate == disable
    // disable button

    const handleBooking = () => {
        const newBooking = {
            userId: sessionUser?.id,
            listingId: listing?.id,
            startDate,
            endDate,
            numGuests: 1
        };
        dispatch(add_booking(newBooking))
    }

    return (
        <>
            <div className="bookingsDiv">
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                    />
                </div>
                <p>${listing.price} / night</p>
                <button onClick={handleBooking}
                    disabled={disabled}
                    className={disabled ? 'inactiveBtn' : 'activeBtn'}
                >Reserve</button>

            </div>
            <div>
                Your Upcoming reservations:
                <div>{ }</div>
            </div>
        </>
    )
};

export default Booking;