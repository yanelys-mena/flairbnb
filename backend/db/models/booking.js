'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    numGuests: DataTypes.INTEGER
  }, {});
  Booking.associate = function (models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId' })
    Booking.belongsTo(models.Listing, { foreignKey: 'listingId' })
  };
  return Booking;
};