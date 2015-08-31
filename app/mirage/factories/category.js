import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: i => i + 1,
  title: faker.list.cycle('Incomplete Assignments', 'Upcoming Tests', 'Grade Posted', 'New Messages'),
  items: i => [i*5 + 1, i*5 + 2, i*5 + 3]
});
