import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { load_bookings, add_booking } from '../../store/bookings'
import './Booking.css';
import dayjs from "dayjs";
import { subDays } from 'date-fns'



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
    const [errors, setErrors] = useState([]);
    const [reserve, setReserved] = useState(false)
    const [guestError, setGuestError] = useState('');
    const [uniqueDateError, setUniqueDateError] = useState('');
    const [unavailableError, setUnavailableError] = useState('')


    useEffect(() => {
        dispatch(load_bookings())
    }, []);


    const onChange = (dates) => {

        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    useEffect(() => {

        if (Number(guest) > listing.guests) {
            setGuestError(`Maximum guests are ${listing?.guests}`)
            // setDisabled(true)
        } else {
            setGuestError('')
        };

    }, [guest, setGuest])


    useEffect(() => {
        if (startDate && endDate) {

            if (dayjs(startDate.toString()).format("YYYY-MM-DD") === dayjs(endDate.toString()).format("YYYY-MM-DD")) {
                setUniqueDateError(['Check-in and Checkout cannot be the same.'])
            } else {
                setUniqueDateError('')
            }
            // && dayjs(startDate.toString()).format("YYYY-MM-DD") <= '2022-04-30'
            // || dayjs(endDate.toString()).format("YYYY-MM-DD") >= '2022-04-27' && dayjs(endDate.toString()).format("YYYY-MM-DD") <= '2022-04-30')

            let getBookedDates = [];
            // console.log('start date', dayjs(startDate.toString()).format("YYYY-MM-DD"), "'> 2022-04-27")
            // console.log('comparison', dayjs(startDate.toString()).format("YYYY-MM-DD") >= '2022-04-27')
            // console.log('endDate date', dayjs(endDate.toString()).format("YYYY-MM-DD"), "'> 2022-04-30")
            // console.log('comparison', dayjs(endDate.toString()).format("YYYY-MM-DD") >= '2022-04-30')
            // console.log('is start date booked', dayjs(startDate.toString()).format("YYYY-MM-DD") >= '2022-04-27' && dayjs(startDate.toString()).format("YYYY-MM-DD") < '2022-04-30')
            // console.log('is end Date booked', dayjs(endDate.toString()).format("YYYY-MM-DD") > '2022-04-27' && dayjs(endDate.toString()).format("YYYY-MM-DD") <= '2022-04-30')
            // console.log('matching either', (dayjs(startDate.toString()).format("YYYY-MM-DD") >= '2022-04-27' && dayjs(startDate.toString()).format("YYYY-MM-DD") < '2022-04-30') || (dayjs(endDate.toString()).format("YYYY-MM-DD") > '2022-04-27' && dayjs(endDate.toString()).format("YYYY-MM-DD") <= '2022-04-30'))

            if (bookedListings.length > 0) {

                bookedListings.forEach(item => {
                    // set errors that booking is booked for this date range:
                    if ((dayjs(startDate.toString()).format("YYYY-MM-DD") >= '2022-04-27' && dayjs(startDate.toString()).format("YYYY-MM-DD") < '2022-04-30') || (dayjs(endDate.toString()).format("YYYY-MM-DD") > '2022-04-27' && dayjs(endDate.toString()).format("YYYY-MM-DD") <= '2022-04-30')) {
                        setUnavailableError(`Not available from ${dayjs(item.startDate).format("MMM DD")} - ${dayjs(item.endDate).format("MMM DD")}. `)
                    } else {
                        setUnavailableError('')
                    }
                    setDatesBooked(getBookedDates)
                })
            } else {
                setDisabled(false)
            }

        };

    }, [startDate, endDate]);

    // console.log( == false)
    console.log('guestError', guestError, 'uniqueDateError:', uniqueDateError, 'unavailableError', unavailableError)

    const handleBooking = async () => {

        if (Number(guest) > listing.guest) {
            setGuestError(`Maximum guests are ${listing?.guests}`)
            // setDisabled(true)
            return;
        } else {
            const newBooking = {
                userId: sessionUser?.id,
                listingId: listing?.id,
                startDate,
                endDate,
                numGuests: guest
            };
            const data = await dispatch(add_booking(newBooking))
            if (data) {
                setReserved(true)
                setDisabled(true)
            }
        };


    }

    const handleInvalidInput = (e) => {
        const invalid = ['e', 'E', '-', '.', '+'];
        if (invalid.includes(e.key)) { e.preventDefault() }
    }


    return (
        <>
            <div id="bookingsDiv">
                <div id="bookings_price">
                    <div><span id="price_bigger">${listing.price} </span>night</div>
                </div>

                {guestError && <div id="validDate"> {guestError} </div>}
                {uniqueDateError && <div id="validDate"> {uniqueDateError} </div>}
                {unavailableError && <div id="validDate"> {unavailableError} </div>}

                <div id="bookings_guest_date_selector">
                    <div id="bookings_selected_dates">
                        <div id="bkn_checkin">
                            <div id="checkin">CHECK-IN</div>
                            <div id="bkn_start">{`${dayjs(startDate.toString()).format("MMM DD")}`}</div>
                        </div>
                        <div id="bkn_checkout">
                            <div id="checkout">CHECKOUT</div>
                            <div id="bkn_end">{(startDate && endDate) && `${dayjs(endDate.toString()).format("MMM DD")}`}</div>
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
                            value={guest}
                            onChange={(e) => setGuest(e.target.value)}
                            placeholder='Guests'>
                        </input>

                    </div>


                </div>
                <div id="date_picker">
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                        showMonthDropdown
                        minDate={subDays(new Date(), 0)}
                    />
                </div>
                <div id="price_total_div">
                    <div>{listing?.price}</div>

                </div>
                <button onClick={handleBooking}
                    disabled={(guestError || uniqueDateError || unavailableError)}
                    className={(guestError || uniqueDateError || unavailableError) ? 'inactiveBtn' : 'activeBtn'}
                >{reserve ? <span id="booked">Success! </span> : 'Reserve'}</button>
                <div>{reserve && <Link to="/trips">See Bookings</Link>}</div>

            </div>

        </>
    )
};

export default Booking;