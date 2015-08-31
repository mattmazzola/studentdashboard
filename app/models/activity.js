import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  item: belongsTo('item', { async : true }),
  name: attr('string'),
  action: attr('string')
});
