import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadImages } from '../../store/images';
import { deleteListing } from '../../store/listings';
import './ListingDetail.css';


const ListingDetail = () => {
    const { listingId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const listing = useSelector((state) => state.listings.entries[listingId]);
    const imageUrls = useSelector((state) => state.images[listingId]);

    useEffect(() => {
        dispatch(loadImages(listingId));
    }, []);

    if (listing) {

        const handleDelete = (e) => {
            e.preventDefault();
            console.log('delete')
            dispatch(deleteListing(listingId));
            history.push('/listings')
        };

        const handleEdit = (e) => {
            e.preventDefault();

            history.push(`/listings/${listingId}/edit-listing`)
        }
        return (
            <div className='detailPage'>
                <div className='topDiv'>
                    <div className="topText">
                        <h2>{listing.name}</h2>
                        <ul>
                            <li className="star">{<i className="fas fa-star"></i>} </li>
                            <li >Reviews Coming Soon</li>
                            <li className="test">{listing.city}, {listing.state}, {listing.country} </li>
                        </ul>
                    </div>

                    <div className="topButtons">

                        {sessionUser ? <> {sessionUser.id === listing.userId && <div>
                            <button
                                className="user_btn">Edit</button>
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