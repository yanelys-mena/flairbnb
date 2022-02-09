import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadImages } from '../../store/images';
import { deleteListing } from '../../store/listings';
import EditListing from '../EditListing'
import Reviews from '../Reviews';
import './ListingDetail.css';


const ListingDetail = () => {

    const { listingId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const imageUrls = useSelector((state) => state.images[listingId]);
    const listing = useSelector((state) => state.listings.entries[listingId]);
    const [page, setPage] = useState(1);


    const handlePage = () => {
        setPage(1);
    };

    if (listing) {

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
                                    <li >Reviews Coming Soon</li>
                                    <li className="test">{listing.city}, {listing.state}, {listing.country} </li>
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
                            <Reviews />
                        </div>
                    </div >}
                {page === 2 && <EditListing listingId={listingId} handlePage={handlePage} />}
            </>

        )

    }

};

export default ListingDetail;