'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AmenityListings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amenityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Amenities' }
      },
      listingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Listings' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AmenityListings');
  }
};