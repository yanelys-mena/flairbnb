const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// User Signup API Route

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

//using the .signup method in models/user file. 
//method uses currentUser scope which returns user with no hasehdPw
router.post(
    '/',
    validateSignup,
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