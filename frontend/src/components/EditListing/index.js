import './EditListing.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateListing } from '../../store/listings';


const EditListing = ({ listingId, handlePage }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const listing = useSelector((state) => state.listings.entries[listingId]);

    const [name, setName] = useState(listing.name);
    const [listingType, setListingType] = useState(listing.listingType);
    const [guests, setGuests] = useState(listing.guests);
    const [beds, setBeds] = useState(listing.beds);
    const [bedrooms, setBedrooms] = useState(listing.bedrooms);
    const [bathrooms, setBathrooms] = useState(listing.bathrooms);
    const [description, setDescription] = useState(listing.description);
    const [address, setAddress] = useState(listing.address);
    const [city, setCity] = useState(listing.city);
    const [state, setState] = useState(listing.state);
    const [country, setCountry] = useState(listing.country);
    const [lat, setLat] = useState(listing.lat);
    const [lng, setLng] = useState(listing.lng);
    const [price, setPrice] = useState(listing.price);


    const updateName = (e) => setName(e.target.value);
    const updateListingType = (e) => setListingType(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateLat = (e) => setLat(e.target.value);
    const updateLng = (e) => setLng(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const [errors, setErrors] = useState([]);



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
    };

    const handleBedsDecrement = (e) => {
        e.preventDefault();
        setBeds((beds) => {
            if (beds > 1) {
                return beds - 1
            } else {
                return beds
            }
        })
    };


    const handleBedroomIncrement = (e) => {
        e.preventDefault();
        setBedrooms((bedrooms) => bedrooms + 1)
    };

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
    };

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateErrors = [];
        if (name.length < 1) validateErrors.push('Please include a title for your listing.');
        if (listingType.length < 1) validateErrors.push('Please include a space type for your listing.');
        if (description.length < 1) validateErrors.push('Please include a description for your listing.');
        if (address.length < 1 || city.length < 1 || country.length < 1 || state.length < 1) validateErrors.push('Please include a full address.');
        if (lat.length < 1 || lng.length < 1) validateErrors.push('Please include a latitude and longitude.');
        if (price.length < 1) validateErrors.push('Please include a price.');
        if (validateErrors.length > 0) {
            setErrors(validateErrors);
            return;
        };

        const formValue = {
            listingId,
            userId: listing.userId,
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

        const listingSuccess = await dispatch(updateListing(formValue))


        if (listingSuccess) {
            return handlePage();
        }
    };

    const handleListingType = (e, value) => {
        e.preventDefault()
        setListingType(value)
    }

    return (
        <div className="editListing">
            <button
                onClick={handlePage}
                className="backToListing_btn">Back to Listing</button>
            <h2>Editing {listing.name}</h2>
            <form
                onSubmit={handleSubmit}
                className="createListingForm">
                <label>
                    <p>Edit your title</p>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Lovely 3-bedroom vacation home
                                 with pool"
                        onChange={updateName} />
                </label>
                <label>
                    <p>Space Type</p>
                    What kind of space will guests have? *entire home, private room, shared room
                    <button onClick={(e) => handleListingType(e, 'entire home')} value={listingType}>entire home</button>
                    <button onClick={(e) => handleListingType(e, 'private room')} value={listingType}>private room</button>
                    <button onClick={(e) => handleListingType(e, 'shared room')} value={listingType}>shared room</button>

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
                        onChange={updateDescription} />
                </label>
                <label>
                    <p>Where's your place located?</p>
                    <input
                        type="text"
                        name="address"
                        placeholder="address"
                        value={address}
                        onChange={updateAddress} />
                </label>
                <div className="address" >


                    <label>
                        <input
                            type="text"
                            name="city"
                            placeholder="city"
                            value={city}
                            onChange={updateCity} />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="state"
                            placeholder="state"
                            value={state}
                            onChange={updateState} />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="country"
                            placeholder="country"
                            value={country}
                            onChange={updateCountry} />
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
                        onChange={updateLat} />
                </label>

                <label>
                    <p>Longtitude</p>
                    <input
                        type="number"
                        step="any"
                        name="lgt"
                        placeholder=" find coordinates on google maps"
                        value={lng}
                        onChange={updateLng} />
                </label>

                <label>
                    <p>Price per night</p>
                    <input
                        type="number"
                        step="any"
                        name="price"
                        placeholder="$00"
                        value={price}
                        onChange={updatePrice} />
                </label>
                {errors && errors.map((error, idx) => <li key={idx} className="errorLi">{error}</li>)}
                <button type="submit" className="create_btn">Submit</button>
            </form>

        </div>
    )
};

export default EditListing;
