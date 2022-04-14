const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Booking } = require('../../db/models');
const { User } = require('../../db/models');
const router = express.Router();


router.put('/', asyncHandler(async (req, res) => {

    const { reviewId, listingId, userId, rating, review } = req.body;
    const reviewToUpdate = await Review.findByPk(parseInt(reviewId));

    const updateReview = await reviewToUpdate.update({ listingId, userId, rating, review });

    const updatedReview = await Review.findByPk(updateReview.id, {
        include: [User]
    });

    res.json(updatedReview);
}));


router.post('/', asyncHandler(async (req, res) => {
    const review = await Review.create(req.body);

    const newReview = await Review.findByPk(review.id, {
        include: [User]
    });
    res.json(newReview);
}));

router.delete('/', asyncHandler(async (req, res) => {
    const { id } = req.body;

    const toDelete = await Review.findByPk(id);
    const deletedReview = await toDelete.destroy();
    res.json(toDelete.id);
}));



module.exports = router;