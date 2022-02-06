import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'


const SignUpFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        console.log('hit submit')
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            const userCredentials = {
                username, email, password
            };
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Password and Confirm Password must be the same.']);
    };


    return (
        <div className="formDiv">
            <form
                className="signUpForm"
                onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx} className="errorLi">{error}</li>)}
                </ul>
                <label>
                    {/* Username: */}
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        className="signup_input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </label>
                <label>
                    {/* Email: */}
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        className="signup_input"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                </label>
                <label>
                    {/* Password: */}
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="signup_input"
                        name="password"
                        required />
                </label>
                <label>
                    {/* Confirm Password: */}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className="signup_input"
                        name="confirmPassword"
                        required />
                </label>
                <button type="submit" className="signup_btn">Sign Up</button>

            </form>
        </div>
    )
};

export default SignUpFormPage;