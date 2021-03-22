'use strict';
const {User} = require('../../models/index');
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      User.create({
        name: faker.name.findName(),
        age: 32,
        domicilio: {
          street: faker.address.streetName()
        }
      },
      {
        include: "domicilio"
      }
      ),
      User.create({
        name: faker.name.findName(),
        age: 32,
        domicilio: {
          street: faker.address.streetName()
        }
      },
      {
        include: "domicilio"
      }
      ),
      User.create({
        name: faker.name.findName(),
        age: 32,
        domicilio: {
          street: faker.address.streetName()
        }
      },
      {
        include: "domicilio"
      }
      )
    ])
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
