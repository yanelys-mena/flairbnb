import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { loadImages } from '../../store/images';
import { deleteListing, getAllListings } from '../../store/listings';
import { getReviews } from '../../store/reviews';
import EditListing from '../EditListing'
import ReviewCard from '../ReviewCard';
import './ListingDetail.css';
import CreateReviewModal from '../CreateReviewModal';


const ListingDetail = () => {
    const { listingId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const imageUrls = useSelector((state) => state.images[Number(listingId)]);
    const listing = useSelector((state) => state.listings[listingId]);
    const [page, setPage] = useState(1);
    const allReviews = useSelector((state) => state.reviews.entries);
    console.log(allReviews)
    const handlePage = () => {
        setPage(1);
    };

    useEffect(() => {
        dispatch(getAllListings());
        dispatch(loadImages(listingId));
        dispatch(getReviews(listingId));

    }, [dispatch])


    if (listing && allReviews) {


        const reviews = Object.values(allReviews);
        const ratings = [];
        for (let i = 0; i < reviews.length; i++) {
            ratings.push(reviews[i].rating)
        };
        const averageRating = (ratings.reduce((a, b) => a + b, 0) / reviews.length);

        const handleDelete = (e) => {
            e.preventDefault();
            dispatch(deleteListing(listingId));
            history.push('/listings')
        };

        const handleEdit = (e) => {
            e.preventDefault();
            setPage(2);
        }
        return (
            <>
                {page === 1 &&
                    <div className='detailPage'>
                        <div className='topDiv'>
                            <div className="topText">
                                <h2>{listing.name}</h2>
                                <ul>
                                    <li className="star">{<i className="fas fa-star"></i>} </li>
                                    {averageRating ? <li id="avgRating"> {averageRating.toFixed(2)} </li> : <li>No Reviews</li>}


                                    <li> · </li>
                                    <li id="reviewsLink"><Link to="#reviewsDiv">{reviews.length} reviews</Link>
                                    </li>
                                    <li id="location">{listing.city}, {listing.state}, {listing.country} </li>
                                </ul>
                            </div>

                            <div className="topButtons">
                                {sessionUser ? <> {sessionUser.id === listing.userId && <div>
                                    <button
                                        className="user_btn"
                                        onClick={handleEdit}>Edit</button>
                                    <button
                                        className="user_btn"
                                        onClick={handleDelete}
                                    >Delete</button>
                                </div>}</> : <></>}

                            </div>


                        </div>
                        <div className="images">
                            {imageUrls && imageUrls.map((url, idx) => {
                                return <img className={`image-${idx}`} src={url} key={idx}></img>
                            })}
                        </div>
                        <div className="bottomSection">
                            <div className="leftSec">
                                {/* <p>Hosted by {sessionUser.username}</p> */}
                                <div className="leftSecInner">
                                    <p>{listing.guests} Guests · {listing.listingType} ·  {listing.beds} Bed · {listing.bathrooms} bath</p>

                                    <div className="descriptionDiv">
                                        <p>{listing.description}</p>
                                    </div>

                                </div>

                            </div>
                            <div className='rightSec'>
                                <div className="bookingsDiv">
                                    <p>${listing.price} / night</p>
                                    <button disabled={true}
                                    >Bookings Coming Soon</button>
                                </div>
                            </div>
                        </div>
                        <div id="reviewsDiv">
                            {sessionUser && <>
                                {(!(reviews.find(review => review.userId === sessionUser.id)) && !(listing.userId === sessionUser.id)) &&

                                    <div id="reviewButtons">
                                        <CreateReviewModal sessionId={sessionUser.id} listingId={listing.id} />
                                    </div>
                                }
                            </>}


                            <div className="reviewsDiv" >
                                {reviews.map(review => (
                                    <ReviewCard key={review.id} review={review} listingId={listing.id} />
                                ))}
                            </div>
                        </div>
                    </div >}
                {page === 2 && <EditListing listingId={listingId} handlePage={handlePage} />}
            </>

        )

    } else {
        return (
            <></>
        )
    }

};

export default ListingDetail;