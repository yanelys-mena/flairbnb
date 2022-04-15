import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addDays } from 'date-fns';
import { getAllListings } from '../../store/listings';
import { load_bookings } from '../../store/bookings';

import './SearchBar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import dayjs from "dayjs";
import { useDispatch, useSelector } from 'react-redux';



export default function SearchBar() {
    const history = useHistory();
    const listings = useSelector((state) => state?.listings);
    const bookings = useSelector((state) => state?.bookings);

    const dispatch = useDispatch();

    const [showPicker, setShowPicker] = useState(false);
    const [location, setLocation] = useState('');
    const [guest, setGuest] = useState('');
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
        // if location -> filter all listings.city || listings.state
        // if guest => filter guests =< listing.guests
        // if 
        /*
startDate.toISOString().slice(0, 10) >= item.startDate && startDate.toISOString().slice(0, 10) <= item.endDate
                    || endDate.toISOString().slice(0, 10) >= item.startDate && endDate.toISOString().slice(0, 10) <= item.endDate
        */
    }


    return (
        <div id="searchBarDiv">
            <div id="searchComponent">
                <div id="location_search">
                    <input
                        type='text'
                        placeholder='Where are you going?'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}>
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