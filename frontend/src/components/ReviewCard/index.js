import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaEllipsisH } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import dayjs from "dayjs";
import './Reviews.css';
import EditReviewModal from '../EditReviewModal';

const ReviewCard = ({ review, sessionId, listingId }) => {
    const dispatch = useDispatch();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let stars = [];
    for (let i = 0; i < review.rating; i++) {
        stars.push(i);
    };

    return (
        <>
            <div className="reviewCard" key={review.id}>
                <div className="userInfo">
                    <div className="leftUserInfo">
                        <img src='https://live.staticflickr.com/65535/51873432080_e4b48f571d.jpg'></img>
                        <div className="details">
                            {review.User.username}
                            <div className="reviewDate"> {dayjs(review.createdAt).format("MMM YYYY")}</div>
                        </div>
                    </div>
                    <div className="ratings">
                        {sessionId === review.userId &&
                            <EditReviewModal review={review} sessionId={sessionId} listingId={listingId} />
                        }
                        <div>
                            {stars.map((star) => (
                                <i className="fas fa-star" key={star}></i>
                            ))}
                        </div>
                    </div>


                </div>

                <div className="userReview">
                    <span>{review.review}</span>
                </div>
            </div>

        </>
    )

};

export default ReviewCard;

/*
REVIEWS DB should have: listingId, userId, rating(ingener), review, createdDate
1. set up model generate
2. set up seed files
Relationships: listing id and user id and user name references the users tabel

*/

