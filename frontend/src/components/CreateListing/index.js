import './CreateListing.css';
import { useEffect, useState } from 'react';
import { createNewListing } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const CreateListing = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const [name, setName] = useState('');
    const [listingType, setListingType] = useState('');
    const [guests, setGuests] = useState(1);
    const [beds, setBeds] = useState('');
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        console.log('GUEST COUNT', guests)
    }, [guests])

    if (!sessionUser) return (
        <Redirect to="/signup" />
    );

    const userId = sessionUser.id;



    const handleSubmit = (e) => {
        e.preventDefault();
        const newArticle = {
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

        dispatch(createNewListing(newArticle));
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




    return (
        <div className='createListingPage'>
            This is where you create a listing
            <form
                onSubmit={handleSubmit}
                className="createListingForm"
            >
                <label>
                    name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    listingType:
                    <input
                        type="text"
                        value={listingType}
                        name="listingType"
                        placeholder="select listing type"
                        onChange={(e) => setListingType(e.target.value)} />
                </label>
                <label>
                    guests:
                    <div className="guestsButtons">
                        <button
                            onClick={handleGuestIncrement}
                            className="increment">
                            <i className="fas fa-plus"></i>
                        </button>
                        <p>{guests}</p>
                        <button
                            onClick={handleGuestDecrement}
                            className="decrement">
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>

                </label>
                <label>
                    beds:
                    <div className="bedsButtons">
                        <button
                            onClick={handleBedsIncrement}
                            className="increment">
                            <i className="fas fa-plus"></i>
                        </button>
                        <p>{guests}</p>
                        <button
                            onClick={handleBedsDecrement}
                            className="decrement">
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>
                </label>

                <label>
                    bedrooms:
                    <div className="bedroomButtons">
                        <button
                            onClick={handleBedroomIncrement}
                            className="increment">
                            <i className="fas fa-plus"></i>
                        </button>
                        <p>{bedrooms}</p>
                        <button
                            onClick={handleBedroomDecrement}
                            className="decrement">
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>
                </label>
                <label>
                    bathrooms:
                    <input
                        type="number"
                        step="any"
                        name="bathrooms"
                        placeholder="bathrooms"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(Number(e.target.value))} />

                </label>
                <label>
                    description:
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    address:
                    <input
                        type="text"
                        name="address"
                        placeholder="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>
                    city:
                    <input
                        type="text"
                        name="city"
                        placeholder="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </label>
                <label>
                    state:
                    <input
                        type="text"
                        name="state"
                        placeholder="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)} />
                </label>
                <label>
                    country:
                    <input
                        type="text"
                        name="country"
                        placeholder="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)} />
                </label>
                <label>
                    lat:
                    <input
                        type="number"
                        step="any"
                        name="lat"
                        placeholder="lat"
                        value={lat}
                        onChange={(e) => setLat(Number(e.target.value))} />
                </label>

                <label>
                    lng:
                    <input
                        type="number"
                        step="any"
                        name="lng"
                        placeholder="lng"
                        value={lng}
                        onChange={(e) => setLng(Number(e.target.value))} />
                </label>

                <label>
                    price:
                    <input
                        type="number"
                        step="any"
                        name="price"
                        placeholder="price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))} />
                </label>
                <button type="submit" className="createListing_btn">Sign Up</button>

            </form>

        </div >
    )
};

export default CreateListing;