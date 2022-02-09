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
            {listings && listings.map(listing =>
                <Link to={`/listings/${listing.id}`} key={listing.id}>
                    <div className="listingCard" key={listing.id}>
                        <div className="cardImage">
                            <img src={imageUrls[listing.id]}></img>
                        </div>
                        <div className="cardInfo">
                            <div>{listing.name}</div>
                            <div className="cardInfoDetails"> <p>{listing.guests} Guests · {listing.listingType} ·  {listing.beds} Bed · {listing.bathrooms} bath</p></div>
                            <div className="review-price">
                                <div className="reviews">
                                    <div className="star">{<i className="fas fa-star"></i>}   Reviews Coming Soon</div>
                                </div>
                                <div className='price'> ${listing.price} / night</div>

                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
};

export default ListingCard;