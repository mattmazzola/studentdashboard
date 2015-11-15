import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany
} = DS;

export default DS.Model.extend({
  assignmentTitle: attr('string'),
  class: attr('string'),
  grade: attr('number'),
  pointsEarned: attr('number'),
  pointsTotal: attr('number'),
  gradeAverage: attr('number'),
  overallGradeChange: attr('number')
});
