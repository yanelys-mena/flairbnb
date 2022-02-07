import { csrfFetch } from './csrf';

const GET_LISTINGS = 'listings/getListings';

//action creator that takes in listings
const loadListings = (listings) => ({
    type: GET_LISTINGS,
    listings
})

//thunk middleware fetch api and then dispatch to reducer.
export const getListings = () => async (dispatch) => {
    console.log('inTHUNK')

    //fetch the items from the back end database
    const response = await fetch(`/api/listings`);
    console.log('RESPONSE', response)

    const listings = await response.json();
    console.log(listings)
    // dispatch(load(items, pokemonId));
    // return items
};

const initialState = {};

const listingsReducer = (state = initialState, action) => {
    // let newState;
    // switch (action.type) {
    //     case GET_LISTINGS:
    //         newState = Object.assign({}, state);

    // }
};

export default listingsReducer;