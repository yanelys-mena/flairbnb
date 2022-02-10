import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../store/reviews';
import dayjs from "dayjs";
import './Reviews.css';

const ReviewCard = ({ reviews }) => {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const allReviews = useSelector((state) => state.reviews.entries);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    useEffect(() => {
        dispatch(getReviews(listingId));

    }, [dispatch])
    if (allReviews) {

        // let stars = [];
        // for (let i = 0; i < {review.rating}; i++) {

        // }
        const reviews = Object.values(allReviews);

        return (
            <>
                {reviews.map(review => (
                    <div className="reviewCard" key={review.id}>
                        <div className="userInfo">
                            <img src='https://live.staticflickr.com/65535/51873432080_e4b48f571d.jpg'></img>
                            <div className="details">
                                {review.User.username}
                                <div className="reviewDate"> {dayjs(review.createdAt).format("MMM YYYY")}</div>
                            </div>
                        </div>

                        <div className="userReview">
                            <span>{review.review}</span>
                        </div>
                    </div>
                ))}

            </>
        )
    } else {
        return (<></>)
    }
};

export default ReviewCard;

/*
REVIEWS DB should have: listingId, userId, rating(ingener), review, createdDate
1. set up model generate
2. set up seed files
Relationships: listing id and user id and user name references the users tabel

*/

