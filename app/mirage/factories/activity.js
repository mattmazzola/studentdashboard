import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: i => i + 1,
  name: i => `Activity ${i}`,
  action: faker.list.cycle('Read', 'Write')
});
