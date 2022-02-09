import './EditListing.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


const EditListing = ({ listingId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const listing = useSelector((state) => state.listings.entries[listingId]);
    console.log(listing);



    return (
        <div className="editListing">
            <p>This is the Listing Page</p>
            <p>{listingId}</p>

        </div>
    )
};

export default EditListing;
