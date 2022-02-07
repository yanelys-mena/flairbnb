'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('AmenityListings', [
      {
        amenityId: 8,
        listingId: 1,
      },
      {
        amenityId: 5,
        listingId: 1,
      },
      {
        amenityId: 4,
        listingId: 1,
      },
      {
        amenityId: 2,
        listingId: 2,
      },
      {
        amenityId: 8,
        listingId: 2,
      },
      {
        amenityId: 5,
        listingId: 2,
      },
      {
        amenityId: 4,
        listingId: 2,
      },
      {
        amenityId: 8,
        listingId: 3,
      },
      {
        amenityId: 5,
        listingId: 3,
      },
      {
        amenityId: 4,
        listingId: 3,
      },
      {
        amenityId: 2,
        listingId: 3,
      },
      {
        amenityId: 8,
        listingId: 4,
      },
      {
        amenityId: 5,
        listingId: 4,
      },
      {
        amenityId: 2,
        listingId: 3,
      },
      {
        amenityId: 8,
        listingId: 5,
      },
      {
        amenityId: 4,
        listingId: 5,
      },
      {
        amenityId: 2,
        listingId: 5,
      },


      {
        amenityId: 8,
        listingId: 6,
      },
      {
        amenityId: 4,
        listingId: 6,
      },
      {
        amenityId: 2,
        listingId: 6,
      },

      {
        amenityId: 8,
        listingId: 5,
      },
      {
        amenityId: 4,
        listingId: 5,
      },
      {
        amenityId: 2,
        listingId: 5,
      },


      {
        amenityId: 8,
        listingId: 6,
      },
      {
        amenityId: 4,
        listingId: 6,
      },
      {
        amenityId: 2,
        listingId: 6,
      },


      {
        amenityId: 8,
        listingId: 7,
      },
      {
        amenityId: 4,
        listingId: 7,
      },
      {
        amenityId: 2,
        listingId: 7,
      },


      {
        amenityId: 8,
        listingId: 8,
      },
      {
        amenityId: 4,
        listingId: 8,
      },
      {
        amenityId: 2,
        listingId: 8,
      },

      {
        amenityId: 1,
        listingId: 9,
      },
      {
        amenityId: 2,
        listingId: 9,
      },
      {
        amenityId: 3,
        listingId: 9,
      },
      {
        amenityId: 4,
        listingId: 9,
      },
      {
        amenityId: 6,
        listingId: 9,
      },
      {
        amenityId: 1,
        listingId: 10,
      },
      {
        amenityId: 2,
        listingId: 10,
      },
      {
        amenityId: 3,
        listingId: 10,
      },
      {
        amenityId: 5,
        listingId: 10,
      },
      {
        amenityId: 6,
        listingId: 10,
      },
      {
        amenityId: 7,
        listingId: 10,
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('AmenityListings', null, {});
  }
};

