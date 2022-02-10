import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { FaStar } from 'react-icons/fa'
import './CreateReview.css';


function CreateReviewForm() {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [userReview, setUserReview] = useState("");
    const [errors, setErrors] = useState([]);
    console.log(rating)


    const handleSubmitReview = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(sessionActions.demoLogin()).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <>
            <div className="createReviewDiv">
                <h2> Share your experience </h2>
            </div>
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
                        <input
                            id="reviewInput"
                            type="text"
                            value={userReview}
                            placeholder="review"
                            onChange={(e) => setUserReview(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default CreateReviewForm;