'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('students', [

      {
        name: 'Emily',
        age: '20',
        address: 'Salem, MA',
        gpa: '3.70',
        major: 'Biochemistry',
        image: 'pic1'
      },
      {
        name: 'Fiona',
        age: '21',
        address: 'Providence, RI',
        gpa: '3.82',
        major: 'Psychology',
        image: 'pic2'
      },
      {
        name: 'Travis',
        age: '20',
        address: 'Keene, NH',
        gpa: '3.50',
        major: 'Mechanical Engineering',
        image: 'pic3'
      },
      {
        name: 'Chloe',
        age: '22',
        address: 'Bridgeport, CT',
        gpa: '3.28',
        major: 'Political Science',
        image: 'pic4'
      },
      {
        name: 'Maya',
        age: '19',
        address: 'Boston, MA',
        gpa: '3.80',
        major: 'Graphic Design',
        image: 'pic5'
      },
      {
        name: 'Michael',
        age: '20',
        address: 'Boston, MA',
        gpa: '3.70',
        major: 'Biology',
        image: 'pic6'
      },
      {
        name: 'Noah',
        age: '21',
        address: 'Portland, ME',
        gpa: '3.78',
        major: 'Civil Engineering',
        image: 'pic7'
      },
      {
        name: 'Sarah',
        age: '20',
        address: 'Beverly, MA',
        gpa: '4.00',
        major: 'Biology',
        image: 'pic8'
      },
      {
        name: 'Scott',
        age: '19',
        address: 'Philadelphia, PA',
        gpa: '3.40',
        major: 'Accounting',
        image: 'pic9'
      },
      {
        name: 'Nadine',
        age: '19',
        address: '',
        gpa: '4.00',
        major: 'Biology',
        image: 'pic10'
      },
      {
        name: 'Salim',
        age: '19',
        address: 'Boston, MA',
        gpa: '3.75',
        major: 'Physics',
        image: 'pic11'
      },
      {
        name: 'Caleb',
        age: '20',
        address: 'Anaheim, CA',
        gpa: '3.20',
        major: 'Accounting',
        image: 'pic12'
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('students')

  }
};
