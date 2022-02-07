'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Amenities', [
      {
        name: 'Hot Tub',
      },
      {
        name: 'Patio',
      },
      {
        name: 'Pool',
      },
      {
        name: 'Indoor Fireplace',
      },
      {
        name: 'Outdoor dining area',
      },
      {
        name: 'Exercise equipment',
      },
      {
        name: 'Pool Table',
      },
      {
        name: 'Fire Pit',
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Amenities', null, {});
  }
};
