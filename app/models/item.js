import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany
} = DS;

export default DS.Model.extend({
  category: belongsTo('category', { async: true }),
  categoryPreviewComponentName: attr('string'),
  searchComponentName: attr('string'),
  componentName: attr('string'),
  type: attr('string'),

  // Assignment
  activities: hasMany('activity', { async: true }),
  title: attr('string'),
  class: attr('string'),
  dueDate: attr('string'),
  tags: hasMany('tag'),
  class: attr('string'),
  description: attr('string'),
  pointsEarned: attr('number'),
  pointsTotal: attr('number'),

  // grade
  assignmentTitle: attr('string'),
  //class: attr('string'),
  grade: attr('number'),
  gradeAverage: attr('number'),
  //pointsEarned: attr('number'),
  //pointsTotal: attr('number'),
  overallGradeChange: attr('number'),
  datePosted: attr('string'),

  // Message
  message: attr('string'),
  important: attr('boolean')
  //datePosted: attr('string')

});
