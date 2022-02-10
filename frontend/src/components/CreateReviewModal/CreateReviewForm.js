import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { FaStar } from 'react-icons/fa'
import './CreateReview.css';


function CreateReviewForm() {
    const dispatch = useDispatch();
    const [rating, setRating] = useState("");
    const [userReview, setUserReview] = useState("");
    const [errors, setErrors] = useState([]);



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
                <label>
                    {/* Rating */}
                    <input type="radio" name="rating" id="ratingRadioButton"></input>
                    {[...Array(5)].map((star) => (
                        <FaStar />
                    ))}

                    {/* <input
                        id="ratingInput"
                        type="text"
                        value={rating}
                        placeholder="rating"
                        onChange={(e) => setRating(e.target.value)}
                        required
                    /> */}
                </label>
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
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default CreateReviewForm;