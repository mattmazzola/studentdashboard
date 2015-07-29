import Ember from 'ember';

const categories = [
  {
    id: 1,
    title: 'Incomplete Assignments',
    items: [
      {
        id: 11,
        title: 'Artificial Intelligence Paper',
        class: 'CS300',
        points: 150,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 12,
        title: 'Assignment 1',
        class: 'CS300',
        points: 150,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 13,
        title: 'Assignment 1',
        class: 'CS300',
        points: 150,
        dueDate: '2015-07-30T12:00:00Z'
      }
    ]
  },
  {
    id: 2,
    title: 'Upcoming Tests',
    items: [
      {
        id: 21,
        title: 'Midterm 1: Static Analysis',
        class: 'PHYS200',
        points: 200,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 21,
        title: 'Midterm 1: Static Analysis',
        class: 'PHYS200',
        points: 200,
        dueDate: '2015-07-30T12:00:00Z'
      }
    ]
  },
  {
    id: 3,
    title: 'Grade Posted',
    items: [
      {
        id: 31
      }
    ]
  },
  {
    id: 4,
    title: 'New Messages',
    items: [
      {
        id: 41
      },
      {
        id: 42
      },
      {
        id: 43
      },
      {
        id: 44
      }
    ]
  }
];

export default Ember.Route.extend({
  model() {
    return categories;
  }
});
