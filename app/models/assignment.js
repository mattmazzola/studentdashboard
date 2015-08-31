import DS from 'ember-data';
import item from './item';

const {
  attr
} = DS;

export default item.extend({
  class: attr('string'),
  pointsEarned: attr('number'),
  pointsTotal: attr('number'),
  description: attr('string')
});
