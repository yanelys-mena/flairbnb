const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// User Signup API Route
//using the .signup method in models/user file. 
//method uses currentUser scope which returns user with no hasehdPw
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { username, email, password } = req.body;
        const user = await User.signup({ username, email, password });

        await setTokenCookie(res, user);

        return res.json({
            user
        });
    })
);


module.exports = router;