import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './SignUpForm.css';

const SignUpFormPage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    return (
        <div className="formDiv">
            <form
                className="signUpForm">
                <ul>
                    {errors.map((error, idx) => <li key={idx} className="errorLi">{error}</li>)}
                </ul>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name="password"
                        required />
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
};

export default SignUpFormPage;