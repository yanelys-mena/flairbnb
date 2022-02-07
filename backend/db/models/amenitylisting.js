'use strict';
module.exports = (sequelize, DataTypes) => {
  const AmenityListing = sequelize.define('AmenityListing', {
    amenityId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {});
  AmenityListing.associate = function(models) {
    // associations can be defined here
  };
  return AmenityListing;
};