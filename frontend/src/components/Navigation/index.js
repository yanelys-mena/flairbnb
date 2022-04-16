import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SearchBar from '../SearchBar';


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
            <div className="navBar">
                <div className='logo'>
                    <NavLink exact to="/">
                        <img src="https://live.staticflickr.com/65535/51871198614_a4bea30867.jpg"></img>
                    </NavLink>
                </div>
                <div id="nav_search">
                    <SearchBar />
                </div>
                <div className='navMiddleLinks'>

                    {/* <li>  <NavLink exact to="/listings#listingsPage">Places to stay</NavLink> </li>
                    <li>  <NavLink exact to="/create-listing">Host an Experience</NavLink> </li> */}
                </div>
                {isLoaded && sessionLinks}
            </div >


        </nav >
    );
}


export default Navigation;