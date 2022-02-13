import './ManageListings.css';
import { Link } from 'react-router-dom';

const MyListingCard = ({ listing }) => {
    return (
        <Link to={`/listings/${listing.id}`} >
            <div id="myListingCard">


                <div><img src={listing?.Images[0].url}></img></div>
                <article id="topCardText">
                    <p>{listing.name} </p>
                    <p>${listing.price} / night</p>
                </article>
                <article id="bottomCardText">

                    <span>{listing.city}, {listing.state}</span>
                    <span></span>
                </article>

            </div >
        </Link>
    )
}

export default MyListingCard;
