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
    const [guest, setGuest] = useState(1);


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
            numGuests: guest
        };
        dispatch(add_booking(newBooking))
    }

    const handleInvalidInput = (e) => {
        const invalid = ['e', 'E', '-', '.', '+'];
        if (invalid.includes(e.key)) e.preventDefault()
    }



    return (
        <>
            <div id="bookingsDiv">
                <div id="bookings_price">
                    <div><span id="price_bigger">${listing.price} </span>night</div>
                </div>

                {available ? '' : <div id="validDate">Please select a valid Date</div>}
                {datesBooked && <>{datesBooked.map((ele, idx) => <div id="date" key={idx}>{ele}</div>)}</>}
                <div id="bookings_guest_date_selector">
                    <div id="bookings_selected_dates">
                        <div id="bkn_checkin">
                            <div id="checkin">CHECK-IN</div>
                            <div id="bkn_start">{(startDate && endDate) && `${dayjs(startDate.toISOString().slice(0, 10)).format("MMM DD")}`}</div>
                        </div>
                        <div id="bkn_checkout">
                            <div id="checkout">CHECKOUT</div>
                            <div id="bkn_end">{(startDate && endDate) && `${dayjs(endDate.toISOString().slice(0, 10)).format("MMM DD")}`}</div>
                        </div>
                        <div>

                        </div>

                    </div>
                    <div id="bookings_guest_input_div">
                        <label>GUESTS</label>
                        <input
                            type='number'
                            min="1"
                            max={listing?.guests}
                            onKeyDown={handleInvalidInput}
                            step="1"
                            pattern="^[-/d]/d*$"
                            value={guest}
                            onChange={(e) => setGuest(e.target.value)}
                            placeholder='Where are you going?'>
                        </input>

                    </div>


                </div>
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

        </>
    )
};

export default Booking;