'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        name: 'Abhishek',
        email: 'Abhishek@yopmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        name: 'Abhishekk15',
        email: 'Abhishek15@yopmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { email: 'john@example.com' }, {});
  }
};
