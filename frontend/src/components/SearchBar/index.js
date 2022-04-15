import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addDays } from 'date-fns';
import './SearchBar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
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

    console.log('startDateSelected', state[0].startDate,)
    console.log('endDateSelected', state[0].endDate)

    useEffect(() => {
        if (!showPicker) return;
        const closePicker = () => {
            setShowPicker(false);
        };
        document.addEventListener('click', closePicker);
        return () => document.removeEventListener("click", closePicker);
    }, [showPicker]);


    return (
        <div id="searchBarDiv">
            <div id="searchComponent">
                <input
                    type='text'
                    placeholder='Where are you going?'>
                </input>
                <div id="search_start_date" onClick={() => setShowPicker(!showPicker)}>
                    <div id="check_in">Check in</div>
                    <div>Add dates</div>
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
        </div>
    )
}