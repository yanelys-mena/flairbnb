import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addDays } from 'date-fns';
import { getAllListings } from '../../store/listings';
import { load_bookings } from '../../store/bookings';
import { add_search } from '../../store/search';
import './SearchBar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import dayjs from "dayjs";
import { useDispatch, useSelector } from 'react-redux';



export default function SearchBar() {
    const history = useHistory();
    const listings = useSelector((state) => Object.values(state?.listings));
    const bookings = useSelector((state) => Object.values(state?.bookings));

    const dispatch = useDispatch();

    const [showPicker, setShowPicker] = useState(false);
    const [location, setLocation] = useState('');
    const [guest, setGuest] = useState(1);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    useEffect(() => {
        dispatch(getAllListings());
        dispatch(load_bookings())

    }, [dispatch])


    useEffect(() => {
        if (!(state[0].startDate.toISOString().slice(0, 10) === state[0].endDate.toISOString().slice(0, 10))) {
            setShowPicker(false)
        }
    }, [state]);



    const handleSearch = (e) => {
        e.preventDefault();
        let searchResults;

        if (location) {
            let listingIds = [];
            let listingsWithBookings = {};
            let searchSet = new Set();


            const filteredResults = listings.map(listing => {
                if ((location === listing.city.toLowerCase() || location === listing.state.toLowerCase()) && listing.guests >= guest) {
                    if (listing.Bookings.length) {
                        listingIds.push(listing.id)
                        listingsWithBookings[listing.id] = listing
                    } else if (listing.Bookings.length === 0) {
                        searchSet.add(listing)
                    }
                }
            }
            )

            if (listingIds.length && (state[0].endDate !== state[0].startDate)) {

                bookings.forEach(b => {
                    if (listingIds.includes(b.listingId)) {

                        if (!(state[0].startDate.toISOString().slice(0, 10) >= b.startDate && state[0].startDate.toISOString().slice(0, 10) <= b.endDate
                            || state[0].endDate.toISOString().slice(0, 10) >= b.startDate && state[0].endDate.toISOString().slice(0, 10) <= b.endDate)) {
                            searchSet.add(listingsWithBookings[b.listingId])
                        }
                    }
                });
                searchResults = Array.from(searchSet)
            }
        };

        dispatch(add_search(searchResults))
        history.push(`/search/${location}/${guest}/${state[0].startDate.toISOString().slice(0, 10)}/${state[0].endDate.toISOString().slice(0, 10)}`)

    }

    return (
        <div id="searchBarDiv">
            <div id="searchComponent">
                <div id="location_search">
                    <input
                        type='text'
                        placeholder='Where are you going?'
                        value={location}
                        onChange={(e) => setLocation(e.target.value.toLowerCase())}>
                    </input>
                </div>

                <div id="search_check_parent">
                    <div id="search_start_date" onClick={() => setShowPicker(!showPicker)}>
                        <div id="check_in"> Check in</div>
                        <div id="search_date_range">{state[0].startDate && state[0].endDate ? <> {`${dayjs(state[0].startDate).format("MMM DD")} - ${dayjs(state[0].endDate).format("MMM DD")}`} </> : 'Add dates'}</div>
                    </div>
                    {showPicker &&
                        <div id="date_range_pop_up">
                            <DateRangePicker
                                onChange={item => setState([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                            />
                        </div>
                    }
                </div>
                <div id="guest_search">
                    <input
                        type='text'
                        value={guest}
                        onChange={(e) => setGuest(e.target.value)}
                        placeholder='Where are you going?'>
                    </input>
                </div>
                <div id="search_btn">
                    <button onClick={handleSearch}> Search  </button>
                </div>
            </div>
        </div >
    )
}