import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { load_bookings, add_booking } from '../../store/bookings'
import './Booking.css';
import dayjs from "dayjs";


const Booking = ({ listing, sessionUser }) => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [available, setAvailable] = useState(true)
    const bookings = useSelector((state) => state?.bookings);
    const bookedListings = Object.values(bookings).filter(booking => booking?.listingId === listing?.id);
    const [disabled, setDisabled] = useState(true);
    const [datesBooked, setDatesBooked] = useState([]);

    useEffect(() => {
        dispatch(load_bookings())
    }, []);


    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };


    useEffect(() => {
        if (startDate && endDate) {
            let getBookedDates = [];

            bookedListings.forEach(item => {

                setAvailable(!(startDate.toISOString().slice(0, 10) >= item.startDate && startDate.toISOString().slice(0, 10) <= item.endDate
                    || endDate.toISOString().slice(0, 10) >= item.startDate && endDate.toISOString().slice(0, 10) <= item.endDate));

                setDisabled(startDate.toISOString().slice(0, 10) >= item.startDate && startDate.toISOString().slice(0, 10) <= item.endDate
                    || endDate.toISOString().slice(0, 10) >= item.startDate && endDate.toISOString().slice(0, 10) <= item.endDate);

                if (startDate.toISOString().slice(0, 10) >= item.startDate && startDate.toISOString().slice(0, 10) <= item.endDate
                    || endDate.toISOString().slice(0, 10) >= item.startDate && endDate.toISOString().slice(0, 10) <= item.endDate) {

                    getBookedDates.push(`${dayjs(item.startDate).format("MMM DD, YYYY")} - ${dayjs(item.endDate).format("MMM DD YYYY")}`)
                }

                setDatesBooked(getBookedDates)
            })
        }
    }, [startDate, endDate])


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
                {available ? '' : <div id="validDate">Please select a valid Date</div>}
                {datesBooked && <>{datesBooked.map((ele, idx) => <div id="date" key={idx}>{ele}</div>)}</>}
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

                <button onClick={handleBooking}
                    disabled={disabled}
                    className={disabled ? 'inactiveBtn' : 'activeBtn'}
                >Reserve</button>

            </div>
            <div>
                <p>${listing.price} / night</p>
                Your Upcoming reservations:
                <div>{ }</div>
            </div>
        </>
    )
};

export default Booking;