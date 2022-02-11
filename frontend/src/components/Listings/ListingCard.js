import './Listings.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../store/reviews';


const ListingCard = ({ listing }) => {
    // const listingsObj = useSelector((state) => state.listings.entries);
    const imageUrls = useSelector((state) => state.images.entries);
    // const listings = Object.values(listingsObj);
    const dispatch = useDispatch();
    // const allReviews = useSelector((state) => state.reviews.entries);

    // if (allReviews) {
    //     const reviews = Object.values(allReviews);
    //     const ratings = [];
    //     for (let i = 0; i < reviews.length; i++) {
    //         ratings.push(reviews[i].rating)
    //     };

    //     console.log(reviews)
    //     const averageRating = (ratings.reduce((a, b) => a + b, 0) / reviews.length).toFixed(1);
    // }

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
                        <div className="review-price">
                            <div className="reviews">
                                <div className="star">{<i className="fas fa-star"></i>} { }</div>
                                {/* {averageRating ? <li id="avgRating"> {averageRating} </li> : <li>No Reviews</li>} */}

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