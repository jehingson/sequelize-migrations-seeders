'use strict';
const faker = require('faker');
const {User} = require('../../models/index')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    let addresses = []
    // Obtenemos los usuarios
    let users = await User.findAll();
    users.forEach(user => {
      addresses.push({
        street: faker.address.streetName(),
        user_id: user.id
      })
    })
     return await queryInterface.bulkInsert('addresses', addresses , {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
     await queryInterface.bulkDelete('addresses', null, {});
  }
};
