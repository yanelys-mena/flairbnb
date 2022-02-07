import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';


import './Navigation.css';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <li className="dropdown">   <ProfileButton user={sessionUser} /></li>
        );
    } else {
        sessionLinks = (
            <div className="navButtons">
                <li>   <LoginFormModal /></li>
                <li>  <NavLink to="/signup">Sign Up</NavLink></li>
            </div>
        );
    }

    return (
        <nav>
            <ul className="navBar">
                <li className='logo'>

                    <NavLink exact to="/">   <img src="https://live.staticflickr.com/65535/51863889297_75048f090d_w.jpg"></img></NavLink> </li>
                <div className='navMiddleLinks'>
                    <li>  <NavLink exact to="/listings">Places to stay</NavLink> </li>
                    <li>  <NavLink exact to="/host">Host an Experience</NavLink> </li>
                </div>
                {isLoaded && sessionLinks}
            </ul >
        </nav >
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