// import { csrfFetch } from './csrf';

const GET_LISTINGS = 'listings/getListings';

//action creator that takes in listings
const loadListings = (listings) => {
    return {
        type: GET_LISTINGS,
        listings
    }
}

//thunk middleware fetch api and then dispatch to reducer.
export const getListings = () => async (dispatch) => {
    const response = await fetch('/api/listings');
    const listings = await response.json();
    dispatch(loadListings(listings.listings));
    return listings;
};

const initialState = {};

const listingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_LISTINGS:
            return { ...state, entries: [...action.listings] };
        default:
            return state;
    }
};

export default listingsReducer;