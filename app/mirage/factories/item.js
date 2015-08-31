import Mirage, {faker} from 'ember-cli-mirage';
import moment from 'moment';

export default Mirage.Factory.extend({
  id: i => i + 1,
  activities: i => [i*3 + 1, i*3 + 2, i*3 + 3],
  title: i => `Item Title ${i}`,
  category_id: i => i + 1,
  description: i => `Item Description ${i}`,
  dueDate: moment().add(Math.floor(Math.random() * 10), 'days').toJSON(),
  class: faker.list.cycle('CS200', 'PSYCH100'),
  pointsEarned: 80,
  pointsTotal: 150,
  tags: [],
  categoryPreviewComponentName: 'sd-search-category-preview-assignment',
  searchComponentName: 'sa-search-assignment',
  componentName: 'sa-assignment',
  type: 'assignment'
});
