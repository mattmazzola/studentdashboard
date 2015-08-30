import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  dueDate: attr('string'),
  title: attr('string'),
  description: attr('string'),
  classId: attr('string')
});
