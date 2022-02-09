import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadImages } from '../../store/images';
import './ListingDetail.css';

const ListingDetail = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const listing = useSelector((state) => state.listings.entries[listingId]);
    const imageUrls = useSelector((state) => state.images[listingId]);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        dispatch(loadImages(listingId));
    }, []);

    // console.log(sessionUser.id, listing.userId)
    // if(sessionUser.id === listing.userId)

    if (listing) {
        return (
            <div className='detailPage'>
                <div className='text'>
                    <h2>{listing.name}</h2>
                    <ul>
                        <li className="star">{<i className="fas fa-star"></i>} </li>
                        <li >Reviews Coming Soon</li>
                        <li className="test">{listing.city}, {listing.state}, {listing.country} </li>
                    </ul>
                </div>
                <div className="images">
                    {imageUrls && imageUrls.map((url, idx) => {
                        return <img className={`image-${idx}`} src={url} key={idx}></img>
                    })}
                </div>
                <div className="bottomSection">
                    <div className="leftSec">
                        <p>Hosted by {sessionUser.username}</p>
                        <div className="leftSecInner">
                            <p>{listing.guests} Guests · {listing.listingType} ·  {listing.beds} Bed · {listing.bathrooms} bath</p>
                            <hr></hr>
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

                <div className="reviewsDiv">
                    <hr></hr>
                    <p> REVIEWS TBD</p>
                </div>
            </div >

        )
    } else {
        return (<p>nada</p>)
    }

};

export default ListingDetail;