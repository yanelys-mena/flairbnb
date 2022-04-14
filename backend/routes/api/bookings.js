const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Booking } = require('../../db/models');
const { User } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll();
    return res.json(bookings)
}));


router.post('/', asyncHandler(async (req, res) => {
    const newBooking = await Booking.create(req.body);
    const booking = await Booking.findByPk(newBooking.id);
    res.json(booking);
}));



router.delete('/:bookingId', asyncHandler(async (req, res) => {
    const { bookingId } = req.params;
    const toDelete = await Booking.findByPk(bookingId);
    const booking = await toDelete.destroy();
    res.json(toDelete);
}));



module.exports = router;