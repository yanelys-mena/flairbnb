import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { add_booking } from '../../store/bookings'

const Booking = ({ listing, sessionUser }) => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleBooking = () => {
        return
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