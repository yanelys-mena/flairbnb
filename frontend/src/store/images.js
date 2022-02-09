import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'listings/load-images'
const UPLOAD_IMAGES = 'listings/upload-images'
const LOAD_ALL_IMAGES = '/listings/load-all-images';

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

const loadSingleImages = (images) => {
    return {
        type: LOAD_ALL_IMAGES,
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

//action creator to load only ONE image for the listings page covers
export const loadAllImages = () => async (dispatch) => {
    const response = await fetch(`/api/listings/images`);
    const images = await response.json();

    dispatch(loadSingleImages(images));
    return images;
};


const initialState = { singles: {} };

const imagesReducer = (state = initialState, action) => {
    console.log('REDUCER', action.images)
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
        case LOAD_ALL_IMAGES:
            newState = { ...state }
            const singles = { ...action.images.getImages };
            newState.singles = singles;
            return newState;
        default:
            return state;
    }
};

export default imagesReducer;
