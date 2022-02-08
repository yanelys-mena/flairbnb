import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadImages } from '../../store/images';
import './ListingDetail.css';

const ListingDetail = () => {
    const { listingId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const listing = useSelector((state) => state.listings.entries[listingId]);
    console.log('USE SELECTOR', listing);
    const images = loadImages(listingId);
    // console.log('IN COMPONENT', images.images);

    // if (!sessionUser) return <Redirect to="/signup" />;
    if (listing) {
        return (
            <div className='detailPage'>

                <div className='text'>
                    <h2>{listing.name}</h2>
                    <p>{listing.city}, {listing.state}, {listing.country} </p>
                </div>
                <div className="images">

                </div>
                <div>
                    <p>Hosted by {sessionUser.username}</p>
                    <p>{listing.guests} Guests · {listing.listingType} ·  {listing.beds} Bed ·  {listing.bathrooms} bath</p>
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