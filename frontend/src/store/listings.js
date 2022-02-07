import { csrfFetch } from './csrf';

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

    console.log('RECEIVED IN THUNK', formValue);

    const {
        userId,
        name,
        listingType,
        guests,
        beds,
        bedrooms,
        bathrooms,
        description,
        address,
        city,
        state,
        country,
        lat,
        lng,
        price
    } = formValue;

    const response = await csrfFetch('/api/listings/create-listing', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            name,
            listingType,
            guests,
            beds,
            bedrooms,
            bathrooms,
            description,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price
        })
    });
    const newListing = await response.json();
    console.log('THUNK NEW LISTING', newListing.newListing)
    // dispatch(createListing(newListing));
    return newListing;
};


const initialState = { entries: {}, isLoading: true };

const listingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_LISTINGS:
            newState = { ...state };
            const entries = {};
            action.listings.forEach(listing => entries[listing.id] = listing);
            newState.entries = entries;
            return newState;
        // return { ...state, entries: [...action.listings] };
        case CREATE_LISTING:
            newState = { ...state }
            newState.entries = { ...newState.entries, [action.newListing.id]: action.newListing }
            return newState;
        default:
            return state;
    }
};

export default listingsReducer;