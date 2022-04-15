const LOAD = '/search/load-listings';
const ADD = '/search/add-listings';

const load = (listings) => {
    return {
        type: LOAD,
        listings
    }
};

const add = listings => {
    return {
        type: ADD,
        listings
    }
};


export const add_search = (listings) => async (dispatch) => {
    dispatch(add(listings));
};



const initialState = {};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            console.log({ ...state })
            return action.listings;
        case ADD:
            return action.listings;
        default:
            return state;
    };
};


export default searchReducer;