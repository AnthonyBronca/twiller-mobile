'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      { username: 'Demo', fullname: 'Demo User', email: 'demo@demo.com', bio: 'I am the demo user', profilePic: 'https://newtwiller.s3.amazonaws.com/twitter-egg.jpg', hashedPassword: 'twiller', verified: false, state: 'Florida', country: 'USA', link: '' },
      { username: 'abronca', fullname: 'Anthony Bronca', email: 'abronca@admin.io', bio: 'I am the admin!', profilePic: 'https://newtwiller.s3.amazonaws.com/anthony-profile.jpg', hashedPassword: 'twiller', verified: true, state: 'Florida', country: 'USA', link: '' },
      { username: 'jgrabow', fullname: 'Jade Grabow', email: 'Jade@demo.com', bio: 'I am a seeded user', profilePic: 'https://newtwiller.s3.amazonaws.com/fancy+nessie.jpeg', hashedPassword: 'twiller', verified: true, state: 'Florida', country: 'USA', link: '' },
      { username: 'Ben', fullname: 'Obiwan Kenobi', email: 'notajedi@sw.io', bio: '', profilePic: 'https://newtwiller.s3.amazonaws.com/obiwan-profile.jpg', hashedPassword: 'twiller', verified: false, state: 'New York', country: 'USA', link: '' },
      { username: 'Vader', fullname: 'Anakin Skywalker', email: 'vader@empire.com', bio: 'killing younglings is a passion', profilePic: 'https://newtwiller.s3.amazonaws.com/vader-profile.jpg', hashedPassword: 'twiller', verified: false, state: 'California', country: 'USA', link: '' },
      { username: 'Queen Amadila', fullname: 'Padmae Amadela', email: 'padmae@demo.com', bio: "Anakin, you're going down a path i can't follow", profilePic: 'https://newtwiller.s3.amazonaws.com/padme-profile.jpg', hashedPassword: 'twiller', verified: false, state: 'California', country: 'USA', link: '' },
      { username: 'Wattson', fullname: 'Natalie Paquette', email: 'wattson@apex.com', bio: 'NESSIESSS!!!! Hehee', profilePic: 'https://newtwiller.s3.amazonaws.com/wattson-profile.jpg', hashedPassword: 'twiller', verified: false, state: 'Paris', country: 'France', link: '' },
      { username: 'Nessie', fullname: 'Nessie Apex', email: 'nessie@demo.com', bio: 'cute little plushie', profilePic: 'https://newtwiller.s3.amazonaws.com/1655236694455.png', hashedPassword: 'twiller', verified: true, state: 'Florida', country: 'USA', link: '' },
      { username: 'Brand', fullname: 'Brand Company', email: 'Brand@demo.com', bio: 'Brand Company', profilePic: 'https://newtwiller.s3.amazonaws.com/Logo-Pandora.jpg', hashedPassword: 'twiller', verified: true, state: 'Florida', country: 'USA', link: '' },
      { username: 'App Academy', fullname: 'App Academy', email: 'aa@aa.io', bio: 'making coders!', profilePic: 'https://newtwiller.s3.amazonaws.com/1655236371746.png', hashedPassword: 'twiller', verified: false, state: 'California', country: 'USA', link: '' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
