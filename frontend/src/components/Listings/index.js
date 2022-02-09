import './Listings.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';
import ListingDetail from '../ListingDetail';
import ListingCard from './ListingCard';

const Listings = () => {
    const listingId = useParams();
    const dispatch = useDispatch();
    const listingsObj = useSelector((state) => state.listings.entries);
    const imageUrls = useSelector((state) => state.images.singles);
    const listings = Object.values(listingsObj);

    useEffect(() => {
        dispatch(getListings());
        dispatch(loadCoverImages())
    }, [dispatch])


    return (
        <div className="listingsPage">
            <div className="leftSide">
                <ListingCard />
            </div>
            <div className="rightSide">
                <p>map goes here</p>
            </div>

        </div>
    )
};

export default Listings;