import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function CreateReviewForm() {
    const dispatch = useDispatch();
    const [rating, setRating] = useState("");
    const [userReview, setUserReview] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setErrors([]);
        // return dispatch(sessionActions.login({ email, password })).catch(
        //     async (res) => {
        //         const data = await res.json();
        //         if (data && data.errors) setErrors(data.errors);
        //     }
        // );
    };

    const handleDemoLogin = (e) => {
        e.preventDefault();
        // setErrors([]);
        // setEmail('demo@demo.com');
        // setPassword('password');
        // return dispatch(sessionActions.demoLogin()).catch(
        //     async (res) => {
        //         const data = await res.json();
        //         if (data && data.errors) setErrors(data.errors);
        //     }
        // );
    };

    return (
        <>
            <div className="Welcome">
                <h2> Create Review </h2>
            </div>
            <form
                className="loginForm"
                onSubmit={handleSubmit} >
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label>
                    {/* Email */}
                    <input
                        type="text"
                        value={rating}
                        placeholder="rating"
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </label>
                <label>
                    {/* Password */}
                    <input
                        type="text"
                        value={userReview}
                        placeholder="review"
                        onChange={(e) => setUserReview(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log In</button>
                <button type="submit" onClick={handleDemoLogin}>Demo Login</button>
            </form>
        </>
    );
}

export default CreateReviewForm;