import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import CreateListings from '../CreateListing';

import './ProfileButton.css';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => { setShowMenu(false) };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>

            <button id="menu" onClick={openMenu}>
                <i className="fas fa-bars nav_bars_icon"></i>
                <i className="fas fa-user-circle nav_user_icon"></i>
            </button>
            {showMenu && (
                <div id="dropdown">
                    <div id="dropdown_first">
                        Trips
                    </div>
                    <Link id="dropdown_second" to="/manage-listings">

                        Manage listings

                    </Link>
                    <div id="dropdown_last" onClick={logout}>
                        Log out
                    </div>
                </div>)}
        </>
    );
}

export default ProfileButton;