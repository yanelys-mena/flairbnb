const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');
const { secret, expiresIn } = jwtConfig;

//NOTE will be used in login & signup route
//Is using the toSafeObject instance method to retrieve id/username/email
const setTokenCookie = (res, user) => {
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) }
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie('token', token, {
        maxAge: expiresIn * 1000, //in ms
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "Lax"
    });
    return token;
};

//NOTE restore session using JWT cookie. 
// it is checking if valid JWT cookie exists
//using the currentUser scope to query (this is excluding hashedPw from query return)
/*
passing in:
- token from req.cookies
- secret from config file
- jwtPayload is the entire object sent from the setTokenCookie function ex. jwtPayload.data
*/
const restoreUser = (req, res, next) => {
    const { token } = req.cookies;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            return next();
        }
        try {
            //find the user in the database and add the user to the response object
            const { id } = jwtPayload.data;
            req.user = await User.scope('currentUser').findByPk(id);
        } catch (e) {
            //if err occurs, remove cookie
            res.clearCookie('token');
            return next();
        }
        //if user is not found, remove cookie
        if (!req.user) res.clearCookie('token');
        return next();
    })
};

const requireAuth = [
    restoreUser,
    function (req, _res, next) {
        if (req.user) return next();

        const err = new Error('Unauthorized');
        err.title = 'Unauthorized';
        err.errors = ['Unauthorized'];
        err.status = 401;
        return next(err); //passing err to our error handlers
    }
];

module.exports = { setTokenCookie, restoreUser, requireAuth };
