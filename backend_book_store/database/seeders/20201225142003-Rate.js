module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Rates',
      [
        {
          id: 1,
          bookId: 1,
          userId: 1,
          rate: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          bookId: 1,
          userId: 2,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          bookId: 1,
          userId: 3,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          bookId: 1,
          userId: 4,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Rates', null, {}),
};
