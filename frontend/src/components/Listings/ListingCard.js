import './Listings.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../store/reviews';


const ListingCard = ({ listing }) => {
    const imageUrls = useSelector((state) => state.images.entries);
    const dispatch = useDispatch();

    let reviews;

    if (listing.Reviews) {
        reviews = listing.Reviews
    } else {
        reviews = [];
    }

    const ratings = [];
    if (reviews) {
        for (let i = 0; i < reviews.length; i++) {
            ratings.push(reviews[i].rating)
        };
    }

    const averageRating = (ratings.reduce((a, b) => a + b, 0) / reviews.length).toFixed(2);
    console.log(averageRating)

    return (

        <>
            <Link to={`/listings/${listing.id}`} key={listing.id}>
                <div className="listingCard" key={listing.id}>
                    <div className="cardImage">
                        {imageUrls &&
                            <img alt={listing.name} src={Object.values(imageUrls).find(ele => ele.listingId === listing.id)?.url}></img>}
                    </div>
                    <div className="cardInfo">
                        <div className='title'>{listing.name}</div>
                        <div className="cardInfoDetails"> <p>{listing.guests} Guests · {listing.listingType} ·  {listing.beds} Bed · {listing.bathrooms} bath</p></div>
                        <div className="bottomSec">
                            <div className="reviews">

                                <span>
                                    <i className="fas fa-star"></i>
                                </span>
                                <span id="avgRatingText">{averageRating ? averageRating : 0}</span>
                                <span id='reviewAmount'>
                                    ({reviews.length} reviews)
                                </span>

                            </div>
                            <div className='price'> ${listing.price} / night</div>

                        </div>

                    </div>
                </div>
            </Link>
        </>
    )

};

export default ListingCard;