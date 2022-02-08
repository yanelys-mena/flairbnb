import { useEffect } from 'react';
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
    console.log('///', imageUrls)
    useEffect(() => {

        dispatch(loadImages(listingId));

    }, []);


    if (listing) {
        return (
            <div className='detailPage'>
                <div className='text'>
                    <h2>{listing.name}</h2>
                    <p>{listing.city}, {listing.state}, {listing.country} </p>
                </div>
                <div className="images">
                    {imageUrls && imageUrls.map((url, idx) => {
                        return <img className={`image-${idx}`} src={url} key={idx}></img>
                    })}
                </div>
                <div className="bottomSection">
                    <p>Hosted by {sessionUser.username}</p>
                    <p>{listing.guests} Guests · {listing.listingType} ·  {listing.beds} Bed · {listing.bathrooms} bath</p>
                </div>

                LISTING DETAIL
                <li>{listingId.listingId} · </li>
            </div>

        )
    } else {
        return (<p>nada</p>)
    }

};

export default ListingDetail;