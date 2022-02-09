import './Listings.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../store/listings';
import { loadCoverImages } from '../../store/images';

const ListingCard = () => {

    const listingsObj = useSelector((state) => state.listings.entries);
    const imageUrls = useSelector((state) => state.images.singles);
    const listings = Object.values(listingsObj);


    return (

        <>
            <p>this is a card</p>
            {listings && listings.map(listing =>
                <div key={listing.id}>
                    <Link to={`/listings/${listing.id}`} key={listing.id}>{listing.name}</Link>
                </div>

            )}
        </>
    )
};

export default ListingCard;