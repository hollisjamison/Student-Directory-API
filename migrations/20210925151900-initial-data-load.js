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
        image: 'emily.svg'
      },
      {
        name: 'Fiona',
        age: '21',
        address: 'Providence, RI',
        gpa: '3.82',
        major: 'Psychology',
        image: 'fiona.svg'
      },
      {
        name: 'Travis',
        age: '20',
        address: 'Keene, NH',
        gpa: '3.50',
        major: 'Mechanical Engineering',
        image: 'travis.svg'
      },
      {
        name: 'Chloe',
        age: '22',
        address: 'Bridgeport, CT',
        gpa: '3.28',
        major: 'Political Science',
        image: 'chloe.svg'
      },
      {
        name: 'Maya',
        age: '19',
        address: 'Boston, MA',
        gpa: '3.80',
        major: 'Graphic Design',
        image: 'maya.svg'
      },
      {
        name: 'Michael',
        age: '20',
        address: 'Boston, MA',
        gpa: '3.70',
        major: 'Biology',
        image: 'michael.svg'
      },
      {
        name: 'Noah',
        age: '21',
        address: 'Portland, ME',
        gpa: '3.78',
        major: 'Civil Engineering',
        image: 'noah.svg'
      },
      {
        name: 'Sarah',
        age: '20',
        address: 'Beverly, MA',
        gpa: '4.00',
        major: 'Biology',
        image: 'sarah.svg'
      },
      {
        name: 'Scott',
        age: '19',
        address: 'Philadelphia, PA',
        gpa: '3.40',
        major: 'Accounting',
        image: 'scott.svg'
      },
      {
        name: 'Nadine',
        age: '19',
        address: 'Montreal, QC',
        gpa: '4.00',
        major: 'Biology',
        image: 'nadine.svg'
      },
      {
        name: 'Salim',
        age: '19',
        address: 'Boston, MA',
        gpa: '3.75',
        major: 'Physics',
        image: 'salim.svg'
      },
      {
        name: 'Caleb',
        age: '20',
        address: 'Anaheim, CA',
        gpa: '3.20',
        major: 'Accounting',
        image: 'caleb.svg'
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('students')

  }
};
