//back end set up
const GET_REVIEWS = '/reviews/get-reviews';
const CREATE_REVIEW = '/reviews/create-review';

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

//NOTE CREATE A REVIEW

const create = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
};

export const createReview = (toCreate) => async (dispatch) => {

    const response = await fetch(`/api/listings//reviews`, {
        method: 'POST',
        body: JSON.stringify({ toCreate })
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(create(review))
    }
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
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
};


export default reviewReducer;