/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';
import moment from 'moment';

export default Mirage.Factory.extend({
  id: i => i,
  dueDate: i => moment('2015-08-29T08:00:00Z').add(i, 'days').toJSON(),
  title: i => `Assignment ${i}`,
  description: i => `The description of assignments ${i}`,
  classId: faker.list.cycle('ECE200', 'PSY100', 'PHYS200')

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
