import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../store/reviews'

const Reviews = () => {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const reviews = useSelector((state) => state.entries);
    // console.log(reviews);

    useEffect(() => {
        dispatch(getReviews(listingId))
    }, [])

    return (
        <>
            <p> REVIEWS TBD</p>

        </>
    )
};

export default Reviews;

/*
REVIEWS DB should have: listingId, userId, username, rating(ingener), review, createdDate
1. set up model generate
2. set up seed files
Relationships: listing id and user id and user name references the users tabel

*/

