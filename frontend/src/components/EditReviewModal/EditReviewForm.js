import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from 'react-icons/fa';
import { editReview } from '../../store/reviews'
import './EditReview.css';


function EditReviewForm({ listingId, sessionId, review }) {
    const dispatch = useDispatch();
    // const userReview = useSelector((state) => state.reviews.entries[sessionId]);
    const [rating, setRating] = useState(review.rating)
    const [hover, setHover] = useState(null)
    const [newReview, setNewReview] = useState(review.review);
    const [errors, setErrors] = useState([]);

    const handleEditReview = (e) => {
        e.preventDefault();

        const toEdit = {
            listingId,
            userId: review.userId,
            rating,
            review: newReview
        }
        return dispatch(editReview(toEdit));

    };

    return (
        <>
            <div className="EditReviewDiv">
                <h2> Update your review </h2>
            </div>
            <form
                className="createReviewForm"
                onSubmit={handleEditReview} >
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>

                <div id="starRating">

                    {[...Array(5)].map((star, idx) => {
                        const ratingVal = idx + 1;
                        return (
                            <label key={idx}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingVal}
                                    onClick={() => setRating(ratingVal)}
                                />
                                <FaStar
                                    className="ratingStars"
                                    size={40}
                                    onMouseEnter={() => setHover(ratingVal)}
                                    onMouseLeave={() => setHover(null)}
                                    color={ratingVal <= (hover || rating) ? "FFA534" : "#e4e5e9"} />
                            </label>
                        )
                    })}


                </div>

                <div>
                    <label>
                        {/* Review */}
                        <textarea
                            id="reviewInput"
                            value={newReview}
                            placeholder="Tell us about your experience..."
                            onChange={(e) => setNewReview(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default EditReviewForm;