import './CreateListing.css';
import { useState, useEffect } from 'react';
import { createNewListing } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';


const CreateListing = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);

    const [name, setName] = useState('');
    const [listingType, setListingType] = useState('');
    const [guests, setGuests] = useState();
    const [beds, setBeds] = useState();
    const [bedrooms, setBedrooms] = useState();
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [price, setPrice] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArticle = {
            userId,
            name,
            listingType,
            guests,
            beds,
            bedrooms,
            description,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price
        };


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
                        type="text"
                        name="guests"
                        placeholder="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)} />
                </label>
                <label>
                    beds:
                    <input
                        type="text"
                        name="beds"
                        placeholder="beds"
                        value={beds}
                        onChange={(e) => setBeds(e.target.value)} />
                </label>
                <label>
                    bedrooms:
                    <input
                        type="text"
                        name="bedrooms"
                        placeholder="bedrooms"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)} />
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
                        type="text"
                        name="lat"
                        placeholder="lat"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)} />
                </label>

                <label>
                    lng:
                    <input
                        type="text"
                        name="lng"
                        placeholder="lng"
                        value={lng}
                        onChange={(e) => setLng(e.target.value)} />
                </label>

                <label>
                    price:
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </label>


            </form>

        </div >
    )
};

export default CreateListing;