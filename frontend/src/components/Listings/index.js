import './Listings.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';


const Listings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('inUseEffect')
        dispatch(getListings());
    }, [])

    return (
        <div className="listingsPage">
            <h3>This is the Listings Page</h3>

        </div>
    )
};

export default Listings;