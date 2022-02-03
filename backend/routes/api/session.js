const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

// User Login API Route
router.post(
    '/',
    asyncHandler(async (req, res, next) => {
        console.log('//////', req.body);
        const { credential, password } = req.body;

        const user = await User.login({ credential, password });

        if (!user) {
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The provided credentials were invalid.'];
            return next(err);

        } else {
            await setTokenCookie(res, user);
            return res.json({ user });
        }
    })
);

// User Logout API Route
//removing jwt token
router.delete(
    '/',
    (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);

module.exports = router;