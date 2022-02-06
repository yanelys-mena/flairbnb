import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import CreateListings from '../CreateAListing';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu}>
                <i className="fas fa-bars"></i>


            </button>
            {showMenu && (
                <ul className="dropdownList">
                    <li >{user.username}</li>
                    <li> Host an Experience </li>
                    <li>
                        <button className="logout_btn" onClick={logout}>Log Out</button>
                    </li>
                </ul >)
            }
        </>
    );
}

export default ProfileButton;