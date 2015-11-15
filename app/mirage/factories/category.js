import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: i => i + 1,
  title: faker.list.cycle('Incomplete Assignments', 'Upcoming Tests', 'Grade Posted', 'New Messages'),
  items: i => [1,2,3].map(x => x + i*10)
});
