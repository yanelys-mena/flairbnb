import './CreateListing.css';

import './ImageUpload.css';
import { uploadFiveImages } from '../../store/images';
import { useEffect, useState } from 'react';
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
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('errirs', imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive)
    }, [imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive,])


    const handleImageSubmit = async (e) => {

        e.preventDefault();

        const validateErrors = [];
        if (imageOne.length < 1 || imageTwo.length < 1 || imageThree.length < 1 || imageFour.length < 1 || imageFive.length < 1) validateErrors.push('Please upload five images.')
        if (validateErrors.length > 0) {
            setErrors(validateErrors);
            return;
        }

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
            {errors && errors.map((error) => <li key={error}>{error}</li>)}
            <button
                type="submit"
                className="image_btn">Upload</button>
        </form>

    )
};

export default UploadImages;
