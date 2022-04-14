'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Bookings', [
      { userId: 1, listingId: 1, startDate: '2022-04-17', endDate: '2022-04-20', numGuests: 2 },
      { userId: 1, listingId: 2, startDate: '2022-04-25', endDate: '2022-05-01', numGuests: 1 },
      { userId: 2, listingId: 22, startDate: '2022-04-25', endDate: '2022-05-01', numGuests: 1 },
      { userId: 3, listingId: 22, startDate: '2022-04-17', endDate: '2022-04-20', numGuests: 1 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bookings', null, {});

  }
};
