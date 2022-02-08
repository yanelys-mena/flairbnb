import './CreateListing.css';

import './ImageUpload.css';
import { uploadFiveImages } from '../../store/images';
import { useState } from 'react';
import { createNewListing } from '../../store/listings';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

function UploadImages({ listingId }) {
    const history = useHistory();

    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [imageFour, setImageFour] = useState('');
    const [imageFive, setImageFive] = useState('');
    console.log(listingId);
    const dispatch = useDispatch();

    const handleImageSubmit = async (e) => {
        e.preventDefault();
        const newImages = await dispatch(uploadFiveImages(
            {
                imageOne,
                imageTwo,
                imageThree,
                imageFour,
                imageFive,
                listingId
            }));
        history.push('/listings')
    }

    return (
        <form
            onSubmit={handleImageSubmit}
            className="imageForm"
        >
            <label>
                <p>Upload 5 images</p>
                Show your guests a preview of your awesome place!
                <input
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={imageOne}
                    onChange={(e) => setImageOne(e.target.value)} />
                <input
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={imageTwo}
                    onChange={(e) => setImageTwo(e.target.value)} />
                <input
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={imageThree}
                    onChange={(e) => setImageThree(e.target.value)} />
                <input
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={imageFour}
                    onChange={(e) => setImageFour(e.target.value)} />
                <input
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={imageFive}
                    onChange={(e) => setImageFive(e.target.value)} />
            </label>
            <button
                type="submit"
                className="image_btn">Upload</button>
        </form>

    )
};

export default UploadImages;
