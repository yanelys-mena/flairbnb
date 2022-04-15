import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { addDays } from 'date-fns';
import './SearchBar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import dayjs from "dayjs";



export default function SearchBar() {
    const history = useHistory();
    const [showPicker, setShowPicker] = useState(false)

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);


    useEffect(() => {
        if (!(state[0].startDate.toISOString().slice(0, 10) === state[0].endDate.toISOString().slice(0, 10))) {
            setShowPicker(false)
        }
    }, [state]);



    return (
        <div id="searchBarDiv">
            <div id="searchComponent">
                <input
                    type='text'
                    placeholder='Where are you going?'>
                </input>
                <div id="search_check_parent">
                    <div id="search_start_date" onClick={() => setShowPicker(!showPicker)}>
                        <div id="check_in"> Check in</div>
                        <div>{state[0].startDate && state[0].endDate ? <> {`${dayjs(state[0].startDate).format("MMM DD")} - ${dayjs(state[0].endDate).format("MMM DD")}`} </> : 'Add dates'}</div>
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


            </div>
        </div >
    )
}