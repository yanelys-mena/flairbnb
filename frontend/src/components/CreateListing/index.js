import './CreateListing.css';
import { useState, useEffect } from 'react';
import { createNewListing } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';


const CreateListing = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);

    const [name, setName] = useState('');
    const [listingType, setListingType] = useState('');
    const [guests, setGuests] = useState('');
    const [beds, setBeds] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [price, setPrice] = useState('');

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

        console.log(newArticle)
    }

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
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    listingType:
                    <input
                        type="text"
                        name="listingType"
                        placeholder="select listing type"
                        value={listingType}
                        onChange={(e) => setListingType(e.target.value)} />
                </label>
                <label>
                    guests:
                    <input
                        type="number"
                        name="guests"
                        placeholder="guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))} />
                </label>
                <label>
                    beds:
                    <input
                        type="number"
                        name="beds"
                        placeholder="beds"
                        value={beds}
                        onChange={(e) => setBeds(Number(e.target.value))} />
                </label>
                <label>
                    bedrooms:
                    <input
                        type="number"
                        name="bedrooms"
                        placeholder="bedrooms"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(Number(e.target.value))} />
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