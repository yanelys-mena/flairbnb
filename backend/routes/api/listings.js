const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing } = require('../../db/models');
const router = express.Router();

console.log('/////', 'LISTINGS ROUTER');

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const listings = await Listing.findAll();
        return res.json({ listings })
    })
);


module.exports = router;
