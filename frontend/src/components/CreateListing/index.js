import './CreateListing.css';
import './ImageUpload.css';
import { useState } from 'react';
import { createNewListing, uploadFiveImages } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

const CreateListing = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();

    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [listingType, setListingType] = useState('');
    const [guests, setGuests] = useState(1);
    const [beds, setBeds] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [price, setPrice] = useState('');

    const [errors, setErrors] = useState([]);
    const [listingId, setListingId] = useState('');


    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {

        e.preventDefault();
        const userId = sessionUser.id;
        const newListing = {
            userId,
            name,
            listingType,
            guests,
            beds,
            bedrooms,
            bathrooms,
            description,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price
        };

        const listingSuccess = await dispatch(createNewListing(newListing))

        if (listingSuccess) {
            setListingId(listingSuccess.newListing.id);
            // history.push('/listings')
            setPage(2);
        }
    }

    const handleGuestIncrement = (e) => {
        e.preventDefault();
        setGuests((guests) => guests + 1)
    }

    const handleGuestDecrement = (e) => {
        e.preventDefault();

        setGuests((guests) => {
            if (guests > 1) {
                return guests - 1
            } else {
                return guests
            }
        })
    };

    const handleBedsIncrement = (e) => {
        e.preventDefault();
        setBeds((beds) => beds + 1)
    }

    const handleBedsDecrement = (e) => {
        e.preventDefault();

        setBeds((beds) => {
            if (beds > 1) {
                return beds - 1
            } else {
                return beds
            }
        })
    }


    const handleBedroomIncrement = (e) => {
        e.preventDefault();
        setBedrooms((bedrooms) => bedrooms + 1)
    }

    const handleBedroomDecrement = (e) => {
        e.preventDefault();

        setBedrooms((bedrooms) => {
            if (bedrooms > 1) {
                return bedrooms - 1
            } else {
                return bedrooms
            }
        })
    };

    const handleBathroomsIncrement = (e) => {
        e.preventDefault();
        setBathrooms((bedrooms) => bedrooms + .5)
    }

    const handleBathroomsDecrement = (e) => {
        e.preventDefault();

        setBathrooms((bedrooms) => {
            if (bedrooms > 1) {
                return bedrooms - .5
            } else {
                return bedrooms
            }
        })
    };


    return (
        <div>
            {page === 2 && <Image listingId={listingId} />}
            {page === 1 &&
                <div className='createListingPage'>
                    <h2> A new hosting journey starts here</h2>
                    <p>Every Experience idea is reviewed by a small team at Airbnb. If your idea meets quality standards, you’ll get to add dates and start hosting.</p>
                    <form
                        onSubmit={handleSubmit}
                        className="createListingForm">
                        <label>
                            <p>Create your title</p>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Lovely 3-bedroom vacation home
                                 with pool"
                                onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            <p>Space Type</p>
                            What kind of space will guests have? *entire home, private room, shared room
                            <input
                                type="text"
                                value={listingType}
                                name="listingType"
                                placeholder=" entire home, private room, shared room "
                                onChange={(e) => setListingType(e.target.value)} />

                        </label>
                        <div className="form_buttons">
                            <label className="form_buttons_label">
                                <p>Guests</p>
                                <div className="guestsButtons">

                                    <button
                                        onClick={handleGuestDecrement}
                                        className="decrement">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <p>{guests}</p>
                                    <button
                                        onClick={handleGuestIncrement}
                                        className="increment">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>

                            </label>
                            <label className="form_buttons_label">
                                <p>Beds</p>
                                <div className="bedsButtons">
                                    <button
                                        onClick={handleBedsDecrement}
                                        className="decrement">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <p>{beds}</p>
                                    <button
                                        onClick={handleBedsIncrement}
                                        className="increment">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </label>

                            <label className="form_buttons_label">
                                <p>Bedrooms</p>
                                <div className="bedroomButtons">
                                    <button
                                        onClick={handleBedroomDecrement}
                                        className="decrement">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <p>{bedrooms}</p>
                                    <button
                                        onClick={handleBedroomIncrement}
                                        className="increment">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </label>
                            <label className="form_buttons_label">
                                <p>Bathrooms</p>
                                <div className="bathroomsButtons">
                                    <button
                                        onClick={handleBathroomsDecrement}
                                        className="decrement">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <p>{bathrooms}</p>
                                    <button
                                        onClick={handleBathroomsIncrement}
                                        className="increment">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>

                            </label>
                        </div>
                        <label >
                            <p>Create your description</p>
                            <input
                                type="text"
                                name="description"
                                placeholder="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <label>
                            <p>Where's your place located?</p>
                            <input
                                type="text"
                                name="address"
                                placeholder="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} />
                        </label>
                        <div className="address" >


                            <label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)} />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)} />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)} />
                            </label>
                        </div>
                        <label>
                            <p>Latitude</p>
                            <input
                                type="number"
                                step="any"
                                name="lat"
                                placeholder=" find coordinates on google maps"
                                value={lat}
                                onChange={(e) => setLat(Number(e.target.value))} />
                        </label>

                        <label>
                            <p>Longtitude</p>
                            <input
                                type="number"
                                step="any"
                                name="lgt"
                                placeholder=" find coordinates on google maps"
                                value={lng}
                                onChange={(e) => setLng(Number(e.target.value))} />
                        </label>

                        <label>
                            <p>Price per night</p>
                            <input
                                type="number"
                                step="any"
                                name="price"
                                placeholder="$00"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))} />
                        </label>
                        <button type="submit" className="create_btn">Create</button>
                    </form>

                </div >

            }
        </div>


    )
};


function Image({ listingId }) {
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
        console.log(newImages);
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
            <button type="submit" className="image_btn">Upload</button>
        </form>

    )
}



export default CreateListing;