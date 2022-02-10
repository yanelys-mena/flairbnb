import './Listings.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ListingCard = () => {

    const listingsObj = useSelector((state) => state.listings.entries);
    const imageUrls = useSelector((state) => state.images.entries);
    const listings = Object.values(listingsObj);
    return (
        <>
            {listings && listings.map(listing =>
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
                                    <div className="star">{<i className="fas fa-star"></i>}   Reviews Coming Soon</div>
                                </div>
                                <div className='price'> ${listing.price} / night</div>

                            </div>
                        </div>
                    </div>
                </Link>
            )
            }
        </>
    )
};

export default ListingCard;