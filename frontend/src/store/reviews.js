//back end set up
const CREATE_REVIEW = '/reviews/create-review';
const GET_REVIEWS = '/reviews/get-reviews';

//NOTE GET ALL REVIEWS
const getAll = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
};

export const getReviews = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/listings/${listingId}/reviews`);
    if (response.ok) {
        const reviews = await response.json();
        dispatch(getAll(reviews))
    }

};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    console.log('REDUCER', action.reviews)
    let newState;
    switch (action.type) {
        case GET_REVIEWS:
            const entries = {};
            action.reviews.forEach((review) => {
                entries[review.id] = review
            });
            return { ...state, entries };
        default:
            return state;
    };
}
export default reviewReducer;