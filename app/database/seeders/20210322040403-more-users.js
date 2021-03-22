'use strict';
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
     let users = [
      {name: faker.name.findName(), age: 18},
      {name: faker.name.findName(), age: 28},
      {name: faker.name.findName(), age: 22},
      {name: faker.name.findName(), age: 22},
      {name: faker.name.findName(), age: 27},
      {name: faker.name.findName(), age: 29},
      {name: faker.name.findName(), age: 29},
      {name: faker.name.findName(), age: 20}
    ]
      return await queryInterface.bulkInsert('users', users , {});
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('users', {
      age: 18
     }, {});

  }
};
