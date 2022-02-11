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

                    <NavLink exact to="/">   <img src="https://live.staticflickr.com/65535/51871198614_a4bea30867.jpg"></img></NavLink> </li>
                <div className='navMiddleLinks'>
                    <li>  <NavLink exact to="/listings">Places to stay</NavLink> </li>
                    <li>  <NavLink exact to="/create-listing">Host an Experience</NavLink> </li>
                </div>
                {isLoaded && sessionLinks}
            </ul >
        </nav >
    );
}


export default Navigation;