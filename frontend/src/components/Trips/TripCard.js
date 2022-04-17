import '../Listings'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const TripCard = ({ listing, booking }) => {
    const dispatch = useDispatch();

    let reviews;

    if (listing?.Reviews) {
        reviews = listing?.Reviews
    } else {
        reviews = [];
    }

    const ratings = [];
    if (reviews) {
        for (let i = 0; i < reviews.length; i++) {
            ratings.push(reviews[i].rating)
        };
    }

    const averageRating = (ratings.reduce((a, b) => a + b, 0) / reviews.length);

    return (

        <>
            <Link to={`/listings/${listing?.id}`} key={listing?.id} target="_blank" rel="noreferrer">
                <div className="listingCard" key={listing?.id}>
                    <div className="cardImage">
                        {listing?.Images[0].url &&
                            <img alt={listing.name} src={listing.Images[0].url}></img>}
                    </div>
                    <div className="cardInfo">
                        <div id="cardInfo_top">
                            <div id="card_detail_title">
                                <div id="card_detail">{`Entire ${listing?.listingType} in ${listing?.city}`}</div>
                                <div id='card_title'>{listing?.name}</div>
                            </div>
                            <div id='card_border_separator'></div>
                            <div id="cardInfoDetails"> <p>{listing?.guests} Guests · {listing?.bedrooms} bedroom(s) ·  {listing?.beds} Bed · {listing?.bathrooms} bath</p></div>
                        </div>

                        <div id="bottom_section">
                            <div className="reviews">

                                <span>
                                    {averageRating > 0 ? <i className="fas fa-star"></i> : ""}
                                </span>
                                <span id="avgRatingText">
                                    {averageRating ? averageRating.toFixed(2) : ""}
                                </span>
                                <span id='reviewAmount'>
                                    {averageRating > 0 ? <>({reviews.length} reviews)</> : ""}
                                </span>


                            </div>
                            <div className='price'> ${listing?.price} night</div>

                        </div>

                    </div>
                </div>
            </Link>
        </>
    )

};

export default TripCard;