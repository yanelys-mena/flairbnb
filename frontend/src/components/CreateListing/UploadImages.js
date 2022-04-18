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

    const handleImageSubmit = async (e) => {

        e.preventDefault();

        const validateErrors = [];
        if (imageOne.length < 1 || imageTwo.length < 1 || imageThree.length < 1 || imageFour.length < 1 || imageFive.length < 1) validateErrors.push('Please upload five images.')
        if (validateErrors.length > 0) {
            setErrors(validateErrors);
            return;
        }


        const newImages = {
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive,
            listingId
        };
        console.log('NEW', newImages)

        await dispatch(uploadFiveImages(newImages))
        history.push(`/listings/${listingId}`)
    }

    const handleSampleImages = () => {
        setImageOne('https://a0.muscache.com/im/pictures/miso/Hosting-52452887/original/33ce602a-27b9-4291-911e-7e12cfbc02b7.jpeg?im_w=960')
        setImageTwo('https://a0.muscache.com/im/pictures/miso/Hosting-52452887/original/f65a4860-3f82-4f74-adbc-7d98e7897d92.jpeg?im_w=1200')
        setImageThree('https://a0.muscache.com/im/pictures/miso/Hosting-52452887/original/92408063-be85-4a3f-8f44-ca292d40c0bd.jpeg?im_w=1200')
        setImageFour('https://a0.muscache.com/im/pictures/miso/Hosting-52452887/original/9ca2bba1-e6c2-4f61-aad2-ce3d7d16894d.jpeg?im_w=1200')
        setImageFive('https://a0.muscache.com/im/pictures/miso/Hosting-52452887/original/e2d6568e-b71a-45df-af0c-e71eb611b5d4.jpeg?im_w=1200')

    };


    return (
        <form
            onSubmit={handleImageSubmit}
            className="imageForm"
        >
            <label>
                <p>Upload 5 images</p>
                Show your guests a preview of your awesome place!
                <div id="sample_images" onClick={handleSampleImages}>Click for Sample Images</div>
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
                onClick={handleImageSubmit}
                type="submit"
                className="image_btn">Upload</button>
        </form>

    )
};

export default UploadImages;
