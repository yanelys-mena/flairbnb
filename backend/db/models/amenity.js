'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    name: DataTypes.STRING,
    listingId: DataTypes.INTEGER
  }, {});
  Amenity.associate = function (models) {
    Amenity.belongsTo(models.Listing, { foreignKey: 'listingId' });

  };
  return Amenity;
};