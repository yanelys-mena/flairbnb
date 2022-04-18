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
            <div id="nav_right_div">
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <div id="nav_right_div">
                <div id="log_in_Button_div">   <LoginFormModal /></div>
                <div id="sign_up_link">  <NavLink to="/signup">Sign Up</NavLink></div>
            </div>
        );
    }

    return (
        <nav>
            <div id="navBar">
                <div id='logo_div'>
                    <NavLink exact to="/">
                        <img src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"></img>
                        {/* <img src="https://live.staticflickr.com/65535/51871198614_a4bea30867.jpg"></img> */}
                    </NavLink>
                </div>
                {/* <div id="nav_search_div">
                    <SearchBar />
                </div> */}
                {isLoaded && sessionLinks}
            </div >


        </nav >
    );
}


export default Navigation;