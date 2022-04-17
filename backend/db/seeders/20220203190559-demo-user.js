'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@demo.com',
        username: 'DemoUser',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo2@demo.com',
        username: 'ashley_g',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo3@demo.com',
        username: 'timothy_b',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo4@demo.com',
        username: 'pheobe_h',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo5@demo.com',
        username: 'cole_s',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser', 'DemoUser2', 'DemoUser3', 'DemoUser4', 'DemoUser5'] }
    });
  }
};
