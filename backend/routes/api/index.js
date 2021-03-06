const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session');
const usersRouter = require('./users');
const listingsRouter = require('./listings')
const reviewsRouter = require('./reviews');
const bookingsRouter = require('./bookings');
const mapsRouter = require('./maps');

router.use('/session', sessionRouter);
router.use('/users', usersRouter)
router.use('/listings', listingsRouter)
router.use('/reviews', reviewsRouter)
router.use('/bookings', bookingsRouter)
router.use('/maps', mapsRouter);


//testing if the jwt token cookie is being set
router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'DemoUser'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));

//testing if the req.user key has been added by restoreUser
router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
        return res.json(req.user);
    }
);

// testing if no session user, return an error, else return session user
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);


module.exports = router;
