/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';
import moment from 'moment';

export default Mirage.Factory.extend({
  id: i => i,
  dueDate: i => moment().add(i, 'days').toJSON(),
  title: i => `Assignment ${i}`,
  description: i => `The description of assignments ${i}`,
  classId: faker.list.random('ECE200', 'CHEM330', 'PSY100', 'MATH300', 'PHYS200')

  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});
