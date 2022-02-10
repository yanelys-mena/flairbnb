import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../store/reviews'
import './Reviews.css';

const ReviewCard = () => {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const allReviews = useSelector((state) => state.reviews.entries);

    const reviews = Object.values(allReviews);

    console.log(reviews.forEach(ele => console.log(ele.review)))

    useEffect(() => {
        dispatch(getReviews(listingId));

    }, [dispatch])

    return (
        <>
            {reviews.map(review => {
                <divc>

                </div>
            })}

        </>
    )
};

export default ReviewCard;

/*
REVIEWS DB should have: listingId, userId, username, rating(ingener), review, createdDate
1. set up model generate
2. set up seed files
Relationships: listing id and user id and user name references the users tabel

*/

