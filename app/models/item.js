import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany
} = DS;

export default DS.Model.extend({
  category: belongsTo('category', { async: true }),
  activities: hasMany('activity', { async: true }),
  title: attr('string'),
  class: attr('string'),
  description: attr('string'),
  dueDate: attr('string'),
  tags: hasMany('tag'),
  pointsEarned: attr('number'),
  pointsTotal: attr('number'),
  categoryPreviewComponentName: attr('string'),
  searchComponentName: attr('string'),
  componentName: attr('string'),
  type: attr('string')
});
