import Ember from 'ember';

const categories = [
  {
    id: 1,
    title: 'Incomplete Assignments',
    items: [
      {
        id: 11,
        componentName: 'sa-search-assignment',
        title: 'Artificial Intelligence Paper',
        class: 'CS300',
        points: 150,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        dueDate: '2015-07-30T12:00:00Z',
        tags: [
          {
            name: 'homework'
          },
          {
            name: 'chapter 1'
          },
          {
            name: 'artificial intelligence'
          }
        ],
        activities: [
          {
            title: 'Read',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            materials: []
          },
          {
            title: 'Complete',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            materials: []
          }
        ],
        history: [
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Created'
          },
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Posted'
          },
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Submited'
          },
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Returned'
          },
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Submitted'
          },
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Graded'
          }
        ]
      },
      {
        id: 12,
        componentName: 'sa-search-test',
        title: 'Assignment 1',
        class: 'CS300',
        points: 150,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 13,
        componentName: 'sa-search-test',
        title: 'Assignment 2',
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
        componentName: 'sa-search-test',
        title: 'Midterm 1: Static Analysis',
        class: 'PHYS200',
        points: 200,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 21,
        componentName: 'sa-search-test',
        title: 'Midterm 2: Static Analysis',
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
        id: 31,
        componentName: 'sa-search-test',
        title: 'Grade 1'
      }
    ]
  },
  {
    id: 4,
    title: 'New Messages',
    items: [
      {
        id: 41,
        componentName: 'sa-search-test',
        title: 'Message 1'
      },
      {
        id: 42,
        componentName: 'sa-search-test',
        title: 'Message 2'
      },
      {
        id: 43,
        componentName: 'sa-search-test',
        title: 'Message 3'
      },
      {
        id: 44,
        componentName: 'sa-search-test',
        title: 'Message 4'
      }
    ]
  }
];

export default Ember.Route.extend({
  model() {
    return categories;
  }
});
