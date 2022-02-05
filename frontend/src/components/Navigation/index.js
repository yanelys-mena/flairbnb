import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}


// function Navigation({ isLoaded }) {
//     const sessionUser = useSelector(state => state.session.user);

//     let sessionLinks;
//     if (sessionUser) {
//         sessionLinks = (
//             <div className="profile_btn">  <li> <ProfileButton user={sessionUser} /></li></div>
//         );
//     } else {
//         sessionLinks = (
//             <>
//                 <li>  <LoginFormModal /></li>
//                 <li>  <NavLink to="/login">Log In</NavLink></li>
//                 <li><NavLink to="/signup">Sign Up</NavLink></li>
//             </>
//         );
//     }

//     return (
//         <nav>
//             <ul className="navBar">
//                 <li>
//                     <NavLink exact to="/">Home</NavLink>
//                 </li>
//                 {isLoaded && sessionLinks}

//             </ul>
//         </nav>
//     );
// }

export default Navigation;