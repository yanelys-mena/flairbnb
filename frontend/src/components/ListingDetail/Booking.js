import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { load_bookings, add_booking } from '../../store/bookings'

const Booking = ({ listing, sessionUser }) => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    useEffect(() => {
        dispatch(load_bookings())
        console.log(startDate, endDate)
    }, []);


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
            >Reserve</button>
        </div>
    )
};

export default Booking;