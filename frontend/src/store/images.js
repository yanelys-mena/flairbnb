import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'listings/load-images'
const UPLOAD_IMAGES = 'listings/upload-images'

const imageLoader = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    }
};

//action creator for 5 images
const uploadFive = (images) => {
    return {
        type: UPLOAD_IMAGES,
        images
    }
};


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
    dispatch(uploadFive(newImages.newImages));
    return newImages.newImages;
};

const initialState = { entries: {} };

const imagesReducer = (state = initialState, action) => {

    console.log('reducer images', action.images);


    let newState;
    switch (action.type) {
        case UPLOAD_IMAGES:
            newState = { ...state }
            newState.entries = {
                ...newState,
                [action.images.newImageOne.id]: action.images
            }
            return newState;
        // case LOAD_IMAGES:
        //     newState.entries = { ...state }
        //     newState.entries = {
        //         ...newState, [action.images.newImageOne.id]: bindActionCreators.images
        //     }
        default:
            return state;
    }
};

export default imagesReducer;
