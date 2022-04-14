import { csrfFetch } from './csrf';

const LOAD = '/bookings/LOAD';
const ADD = '/bookings/ADD';
const DELETE = '/bookings/DELETE';


const load = (bookings) => ({
    type: LOAD,
    bookings
});

const add = (bookings) => ({
    type: ADD,
    bookings
});

const to_delete = (bookingId) => ({
    type: DELETE,
    bookingId
});


export const load_bookings = () => async (dispatch) => {
    const response = await csrfFetch('/api/bookings');
    console.log(response)
    if (response.ok) {
        const bookings = await response.json();
        console.log('THUNK', bookings)
        dispatch(load(bookings))
    }
}


export const add_booking = (newBooking) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`, {
        method: 'POST',
        body: JSON.stringify(newBooking)
    });

    if (response.ok) {
        const booking = await response.json();
        dispatch(add(booking))
    };
    return;
};



export const delete_booking = (bookingId) => async (dispatch) => {

    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
    });
    const deletedBookingId = await response.json();
    dispatch(to_delete(deletedBookingId))
    return;
};



let initialState = {};

const bookingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = {};
            action.bookings.forEach((booking) => {
                newState[booking.id] = booking;
            });
            return newState;
        }

        case ADD: {
            return { [action.booking.id]: action.booking, ...state };
        }

        case DELETE: {
            newState = { ...state };
            delete newState[action.booking.id];
            return newState;
        }
        default:
            return state;
    }
};

export default bookingsReducer;

