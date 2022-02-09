import { csrfFetch } from './csrf';



const GET_LISTINGS = 'listings/getListings';
const CREATE_LISTING = 'listings/create-listing'
const DELETE_LISTING = 'session/delete-listing';


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
        type: CREATE_LISTING,
        newListing
    }
};

//action creator for deleting a listing
const delete_listing = (deletedListing) => {
    return {
        type: DELETE_LISTING,
        deletedListing
    }
};

//thunk middleware fetch api and then dispatch to reducer.
export const getListings = () => async (dispatch) => {
    const response = await fetch('/api/listings');
    const listings = await response.json();
    dispatch(loadListings(listings.listings));
    return listings;
};

export const createNewListing = (formValue) => async (dispatch) => {

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
    dispatch(createListing(newListing.newListing));
    return newListing;
};


export const restoreListings = () => async dispatch => {
    const response = await csrfFetch('/api/listings');
    const listings = await response.json();
    dispatch(loadListings(listings.listings));
    return listings;
};


export const deleteListing = (listingId) => async dispatch => {
    const response = await csrfFetch('/api/listings/delete', {
        method: 'DELETE',
        body: JSON.stringify({
            listingId
        })
    });
    const deletedListing = await response.json();
    dispatch(delete_listing(listingId));
    return deletedListing;
};

const initialState = { entries: {}, isLoading: true };

const listingsReducer = (state = initialState, action) => {
    console.log('STATE REDUCER', action)
    let newState;
    switch (action.type) {
        case GET_LISTINGS:
            newState = { ...state };
            const entries = {};
            action.listings.forEach(listing => entries[listing.id] = listing);
            newState.entries = entries;
            return newState;
        case CREATE_LISTING:
            newState = { ...state }
            newState.entries = { ...newState.entries, [action.newListing.id]: action.newListing }
            return newState;
        case DELETE_LISTING:

            newState = { ...state }
            delete newState.entries[action.deletedListing]
            return newState;
        default:
            return state;
    }
};


export default listingsReducer;