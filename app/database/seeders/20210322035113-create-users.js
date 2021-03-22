'use strict';

module.exports = {

  // Se ejecuta cuando hacemos la siembra
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    let users = [
      {name: "JEHINGOSN", age: 27},
      {name: "ADRIANA", age: 29},
      {name: "HUGO", age: 26},
      {name: "MAILA", age: 47},
      {name: "JADE", age: 4},
      {name: "OMAR", age: 49},
    ]
      return await queryInterface.bulkInsert('users', users , {});
  },

  // Esto se ejecuta cuando se dehace la siembra
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    return await queryInterface.bulkDelete('users', {
      age: 18
    }, {});
  }
};
