import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'listings/load-images'
const UPLOAD_IMAGES = 'listings/upload-images'

const imageLoader = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    }
};

export const loadImages = async (listingId) => {

    const images = await fetch(`/api/listings/images/${listingId}`).then((image) =>
        image.json());

    // const images = response.json();
    console.log('thunk', images)
};


//action creator for 5 images
const uploadFive = (images) => {
    return {
        type: UPLOAD_IMAGES,
        images
    }
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
    let newState;
    switch (action.type) {
        case UPLOAD_IMAGES:
            newState = { ...state }
            newState.entries = {
                ...newState,
                [action.images.newImageOne.id]: action.images.newImageOne,
                [action.images.newImageTwo.id]: action.images.newImageTwo,
                [action.images.newImageThree.id]: action.images.newImageThree,
                [action.images.newImageFour.id]: action.images.newImageFour,
                [action.images.newImageFive.id]: action.images.newImageFive
            }
            return newState;
        default:
            return state;
    }
};

export default imagesReducer;
