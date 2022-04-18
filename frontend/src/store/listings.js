import { csrfFetch } from './csrf';



// const GET_LISTINGS = 'listings/getListings';
const CREATE_LISTING = 'listings/create-listing'
const DELETE_LISTING = 'listings/delete-listing';
const UPDATE_LISTING = 'listings/update-listing'
const LISTING_IMAGE_TEST = '/listings/image-listing-test';

//action creator that takes in listings
const load = (listings) => {
    return {
        type: LISTING_IMAGE_TEST,
        listings
    }
}


export const getAllListings = () => async (dispatch) => {
    const response = await fetch("/api/listings/get-all-listings")
    if (response.ok) {
        const listings = await response.json();
        dispatch(load(listings))
        return listings
    }
}






//NOTE get listing
// const loadListings = (listings) => {
//     return {
//         type: GET_LISTINGS,
//         listings
//     }
// }


// export const getListings = () => async (dispatch) => {
//     const response = await fetch('/api/listings');
//     const listings = await response.json();
//     dispatch(loadListings(listings.listings));
//     return listings;
// };


//NOTE create listing
const createListing = (newListing) => {
    return {
        type: CREATE_LISTING,
        newListing
    }
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


// export const restoreListings = () => async dispatch => {
//     // const response = await csrfFetch('/api/listings');
//     // const listings = await response.json();
//     // dispatch(loadListings(listings.listings));
//     // return listings;
// const response = await fetch("/api/listings/get-all-listings")
// if (response.ok) {
//     const listings = await response.json();
//     dispatch(load(listings))
// }
// };


//NOTE update a listing
const update_listing = (updatedListing) => {
    return {
        type: UPDATE_LISTING,
        updatedListing
    }
}

export const updateListing = (formValue) => async (dispatch) => {

    const {
        listingId,
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

    const response = await csrfFetch(`/api/listings/${listingId}/update-listing`, {
        method: 'PUT',
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

    const updatedListing = await response.json();

    dispatch(update_listing(updatedListing));
    return updatedListing;
};


//NOTE delete a listing
const delete_listing = (deletedListing) => {
    return {
        type: DELETE_LISTING,
        deletedListing
    }
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



const initialState = {};

const listingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // case GET_LISTINGS:
        //     action.listings.forEach(listing => newState[listing.id] = listing);
        //     return { ...state, ...newState };
        case CREATE_LISTING:
            newState = { ...state }
            // newState.entries = { ...newState.entries, [action.newListing.id]: action.newListing }
            newState[action.newListing.id] = action.newListing
            return newState;
        case DELETE_LISTING:
            newState = { ...state }
            delete newState[action.deletedListing]
            return newState;
        case UPDATE_LISTING:
            newState = { ...state }
            newState[action.updatedListing.id] = action.updatedListing
            return newState;
        case LISTING_IMAGE_TEST:
            const allListings = {};
            action.listings.forEach(listing => allListings[listing.id] = listing);
            return { ...allListings, ...state };
        default:
            return state;
    }
};


export default listingsReducer;