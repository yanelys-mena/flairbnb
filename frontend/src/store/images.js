import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'listings/load-images'
const UPLOAD_IMAGES = 'listings/upload-images'
const LOAD_COVER_IMAGES = '/listings/load-cover-images';





//NOTE Load specific images
const imageLoader = (listingId, images) => {
    return {
        type: LOAD_IMAGES,
        listingId,
        images
    }
};


export const loadImages = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/listings/images/${listingId}`);
    const images = await response.json();
    const urls = images.urlArray;
    dispatch(imageLoader(listingId, urls))
};



//NOTE upload five images
const uploadFive = (listingId, urls) => {
    return {
        type: UPLOAD_IMAGES,
        listingId, urls
    }
};

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

//NOTE load cover images
const loadCovers = (images) => {
    return {
        type: LOAD_COVER_IMAGES,
        images
    }
}

export const loadCoverImages = () => async (dispatch) => {
    const response = await fetch(`/api/listings/images`);
    const images = await response.json();

    dispatch(loadCovers(images));
    return images;
};




const initialState = { entries: {} };

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
            const entries = {};
            action.images.forEach((images) => {
                entries[images.id] = images
            });
            return { ...state, entries };
        default:
            return state;
    }
};

export default imagesReducer;
