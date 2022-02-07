import './CreateListing.css';
import { useState, useEffect } from 'react';
import { createNewListing } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';


const CreateListing = () => {
    const dispatch = useDispatch();

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


    return (
        <div className='createListingPage'>
            This is where you create a listing
        </div >
    )
};

export default CreateListing;