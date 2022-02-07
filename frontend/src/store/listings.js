// import { csrfFetch } from './csrf';

const GET_LISTINGS = 'listings/getListings';
const CREATE_LISTING = 'listings/create-listing'

//action creator that takes in listings
const loadListings = (listings) => {
    return {
        type: GET_LISTINGS,
        listings
    }
}

//action creator that creates a single listing
const createListing = (newListing) => {
    return {
        type: GET_LISTINGS,
        newListing
    }
}


//thunk middleware fetch api and then dispatch to reducer.
export const getListings = () => async (dispatch) => {
    const response = await fetch('/api/listings');
    const listings = await response.json();
    dispatch(loadListings(listings.listings));
    return listings;
};

export const createNewListing = (formValue) => async (dispatch) => {

    console.log('RECEIVED IN THUNK', formValue)
    // const response = await fetch('/api/listings/create-listing');
    // const newListing = await response.json();
    // console.log('THINK NEW LISTING')
    // dispatch(loadListings(newListing));
    // return newListing;
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