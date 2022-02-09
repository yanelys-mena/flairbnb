import './EditListing.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


const EditListing = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const listing = useSelector((state) => listing.entries[listingId])

    console.log(listingId)



    return (
        <div className="editListing">
            <p>This is the Listing Page</p>

        </div>
    )
};

export default EditListing;
