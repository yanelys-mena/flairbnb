import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const handleDemoLogin = (e) => {
        e.preventDefault();
        setErrors([]);
        setEmail('demo@demo.com');
        setPassword('password');
        return dispatch(sessionActions.demoLogin()).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div id="login_modal">
            <div className="welcome">
                <h2> Welcome to Flairbnb </h2>
            </div>
            <form
                className="loginForm"
                onSubmit={handleSubmit} >
                <div id="errors_login">
                    {errors.map((error, idx) => (
                        <div key={idx}>{error}</div>
                    ))}
                </div>
                <label>
                    {/* Email */}
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    {/* Password */}
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"

                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log In</button>
                <button type="submit" onClick={handleDemoLogin}>Demo Login</button>
            </form>
        </div>
    );
}

export default LoginForm;