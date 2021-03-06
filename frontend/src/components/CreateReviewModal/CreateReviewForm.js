import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from 'react-icons/fa';
import { createReview } from '../../store/reviews'
import './CreateReview.css';


function CreateReviewForm({ listingId, sessionId }) {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmitReview = (e) => {
        e.preventDefault();
        let validateErrors = [];
        if (review.length < 5) validateErrors.push('Please enter a review');
        if (rating < 1) validateErrors.push('Please enter a rating')
        setErrors(errors)
        const toCreate = {
            listingId,
            userId: sessionId,
            rating,
            review
        }
        return dispatch(createReview(toCreate));
    };

    return (
        <>
            <div className="createReviewDiv">
                <h2> Share your experience </h2>

                <form
                    className="createReviewForm"
                    onSubmit={handleSubmitReview} >
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
                                        placeholder="Tell us about your experience"
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
                                // type="text"
                                value={review}
                                placeholder="Tell us about your experience"
                                onChange={(e) => setReview(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default CreateReviewForm;