'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Files', [
      {
        id: 1,
        original_name: '16716447686b7c820a0b27f157f16615',
        path_name:
          'http://localhost:4000/public/uploads/16716447686b7c820a0b27f157f16615',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        original_name: 'e2e93d07754f1d0884701d689012c50c',
        path_name:
          'http://localhost:4000/public/uploads/e2e93d07754f1d0884701d689012c50c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        original_name: 'c88671410ad7d94b13f574aeb652242e',
        path_name:
          'http://localhost:4000/public/uploads/c88671410ad7d94b13f574aeb652242e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        original_name: '358fde668f5030548e9dfd66f4c599ed',
        path_name:
          'http://localhost:4000/public/uploads/358fde668f5030548e9dfd66f4c599ed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        original_name: '5b885a48341e6ad5a0bf0b86756b2652',
        path_name:
          'http://localhost:4000/public/uploads/5b885a48341e6ad5a0bf0b86756b2652',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        original_name: 'd96069ac04ca8d889ecf074a5103aead',
        path_name:
          'http://localhost:4000/public/uploads/d96069ac04ca8d889ecf074a5103aead',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        original_name: 'a190b471b63f765ed8d269e2a864f6ec',
        path_name:
          'http://localhost:4000/public/uploads/a190b471b63f765ed8d269e2a864f6ec',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        original_name: '10c9791555b3412bb8c57fc0e8f8ecdf',
        path_name:
          'http://localhost:4000/public/uploads/10c9791555b3412bb8c57fc0e8f8ecdf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        original_name: '062180f664be8458d4f5720bb70a632d',
        path_name:
          'http://localhost:4000/public/uploads/062180f664be8458d4f5720bb70a632d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        original_name: '07add5b7793a092af66bc4a2e5687107',
        path_name:
          'http://localhost:4000/public/uploads/07add5b7793a092af66bc4a2e5687107',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        original_name: '85e9287653a38fdb4b15ae84c4ed3a14',
        path_name:
          'http://localhost:4000/public/uploads/85e9287653a38fdb4b15ae84c4ed3a14',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        original_name: '5aaf9989df66a42d193f7a437c8a502e',
        path_name:
          'http://localhost:4000/public/uploads/5aaf9989df66a42d193f7a437c8a502e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        original_name: '80ff85e42b405259f8ab6ef3044db42d',
        path_name:
          'http://localhost:4000/public/uploads/80ff85e42b405259f8ab6ef3044db42d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        original_name: '83f97ba0caab3fd4ebbaaf8c166856e2',
        path_name:
          'http://localhost:4000/public/uploads/83f97ba0caab3fd4ebbaaf8c166856e2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        original_name: '085da0189692e2fc87373e8ed3014c09',
        path_name:
          'http://localhost:4000/public/uploads/085da0189692e2fc87373e8ed3014c09',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        original_name: '9b60850860677efac1feacef44129119',
        path_name:
          'http://localhost:4000/public/uploads/9b60850860677efac1feacef44129119',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        original_name: 'e72a25b2d18d1940a2a8a47914bf5844',
        path_name:
          'http://localhost:4000/public/uploads/e72a25b2d18d1940a2a8a47914bf5844',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        original_name: '9b6de1884a10ba99550d3341042caa60',
        path_name:
          'http://localhost:4000/public/uploads/9b6de1884a10ba99550d3341042caa60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        original_name: '87a81d25ffaa036030b302620c432e4f',
        path_name:
          'http://localhost:4000/public/uploads/87a81d25ffaa036030b302620c432e4f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        original_name: '5e77b1c16bfe3f49ea09f3044fdef2d0',
        path_name:
          'http://localhost:4000/public/uploads/5e77b1c16bfe3f49ea09f3044fdef2d0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    await queryInterface.bulkDelete('Files', null, {}),
};