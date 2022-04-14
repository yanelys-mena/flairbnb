'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    listingType: DataTypes.STRING,
    guests: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    price: DataTypes.INTEGER
  }, {});
  Listing.associate = function (models) {
    Listing.belongsTo(models.User, { foreignKey: 'userId' });
    Listing.hasMany(models.Image, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true });
    Listing.hasMany(models.Review, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true });
    Listing.hasMany(models.Booking, { foreignKey: "listingId", onDelete: 'CASCADE', hooks: true })

  };
  return Listing;
};