import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'listings/load-images'
const UPLOAD_IMAGES = 'listings/upload-images'
const LOAD_COVER_IMAGES = '/listings/load-cover-images';

const imageLoader = (listingId, images) => {
    return {
        type: LOAD_IMAGES,
        listingId,
        images
    }
};

//action creator for 5 images
const uploadFive = (listingId, urls) => {
    return {
        type: UPLOAD_IMAGES,
        listingId, urls
    }
};

const loadCovers = (images) => {
    return {
        type: LOAD_COVER_IMAGES,
        images
    }
}


//thunk to fetch images
export const loadImages = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/listings/images/${listingId}`);
    const images = await response.json();
    const urls = images.urlArray;
    dispatch(imageLoader(listingId, urls))
};

//thunx middleware for adding 5 images
export const uploadFiveImages = ({ imageOne, imageTwo, imageThree, imageFour, imageFive, listingId }) => async (dispatch) => {

    const response = await csrfFetch('/api/listings/upload-images', {
        method: 'POST',
        body: JSON.stringify({
            imageOne, imageTwo, imageThree, imageFour, imageFive, listingId: Number(listingId)
        })
    });
    const newImages = await response.json();
    const urls = newImages.urlArray;
    dispatch(uploadFive(listingId, urls));
    return urls;
};

//action creator to load only ONE image for the listings page coveRs
export const loadCoverImages = () => async (dispatch) => {
    const response = await fetch(`/api/listings/images`);
    const images = await response.json();

    dispatch(loadCovers(images));
    return images;
};


const initialState = { singles: {} };

const imagesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_IMAGES:
            newState = { ...state }
            newState = {
                ...newState, [action.listingId]: action.images
            }
            return newState
        case UPLOAD_IMAGES:
            newState = { ...state }
            newState = {
                ...newState, [action.listingId]: action.urls
            }
            return newState;
        case LOAD_COVER_IMAGES:
            newState = { ...state }
            const singles = { ...action.images.getImages };
            newState.singles = singles;
            return newState;
        default:
            return state;
    }
};

export default imagesReducer;
