const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing } = require('../../db/models');
const { Image } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const listings = await Listing.findAll();
        return res.json({ listings })
    })
);

const validateCreateListing = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your listing.'),
    check('listingType')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a listing type.'),
    check('guests')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the number of guests to host.'),
    check('beds')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('bedrooms')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('bathrooms')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a '),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a ')
];


router.post(
    '/create-listing',
    asyncHandler(async (req, res, next) => {
        const {
            userId,
            name,
            listingType,
            guests,
            beds,
            bedrooms,
            bathrooms,
            description,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price
        } = req.body;

        const newListing = await Listing.create({
            userId,
            name,
            listingType,
            guests,
            beds,
            bedrooms,
            bathrooms,
            description,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price
        })
        return res.json({
            newListing
        });
    })
);



router.post(
    '/upload-images',
    asyncHandler(async (req, res, next) => {
        const {
            imageOne, imageTwo, imageThree, imageFour, imageFive, listingId
        } = req.body;

        const newImageOne = await Image.create({
            listingId,
            url: imageOne
        });

        const newImageTwo = await Image.create({
            listingId,
            url: imageTwo
        });
        const newImageThree = await Image.create({
            listingId,
            url: imageThree
        });
        const newImageFour = await Image.create({
            listingId,
            url: imageFour
        });
        const newImageFive = await Image.create({
            listingId,
            url: imageFive
        });
        return res.json({
            newImageOne, newImageTwo, newImageThree, newImageFour, newImageFive
        });
    })
);



module.exports = router;
