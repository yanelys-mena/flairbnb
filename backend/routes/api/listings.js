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
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description.'),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an address.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a city.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a state.'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a country.'),
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a latitude.'),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Please provide longtitude.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a pricer per night.'),
    handleValidationErrors
];


router.post(
    '/create-listing',
    validateCreateListing,
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

        const urlArray = [newImageOne.url, newImageTwo.url, newImageThree.url, newImageFour.url, newImageFive.url];

        return res.json({ urlArray })
    })
);

router.get('/images/:listingId', asyncHandler(async (req, res) => {
    const listingId = req.params.listingId
    const images = await Image.findAll({
        where: {
            listingId
        }
    });

    const urlArray = images.map(ele => ele.url)

    res.json({ urlArray });

}));

router.delete('/delete', asyncHandler(async (req, res) => {
    const { listingId } = req.body;
    const deletedListing = await Listing.findByPk(parseInt(listingId));
    if (deletedListing) {
        deletedListing.destroy();
    };
    res.json({ deletedListing: deletedListing.id })
}));

module.exports = router;
