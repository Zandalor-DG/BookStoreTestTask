module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Comments',
      [
        {
          id: 1,
          bookId: 1,
          userId: 4,
          comment: 'hernya',
          createdAt: new Date(Date.UTC(2012, 12, 12)),
          updatedAt: new Date(),
        },
        {
          id: 2,
          bookId: 1,
          userId: 2,
          comment: 'what?',
          createdAt: new Date(Date.UTC(2013, 12, 13)),
          updatedAt: new Date(),
        },
        {
          id: 3,
          bookId: 1,
          userId: 4,
          comment: 'huyat',
          createdAt: new Date(Date.UTC(2012, 10, 14)),
          updatedAt: new Date(),
        },
        {
          id: 4,
          bookId: 1,
          userId: 4,
          comment: 'hernya',
          createdAt: new Date(Date.UTC(2012, 10, 01)),
          updatedAt: new Date(),
        },
        {
          id: 5,
          bookId: 1,
          userId: 2,
          comment: 'what?',
          createdAt: new Date(Date.UTC(2011, 10, 11)),
          updatedAt: new Date(),
        },
        {
          id: 6,
          bookId: 1,
          userId: 4,
          comment: 'huyat',
          createdAt: new Date(Date.UTC(2012, 10, 12)),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Comments', null, {}),
};
