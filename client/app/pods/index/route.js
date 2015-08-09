import Ember from 'ember';
import moment from 'moment';

const categories = [
  {
    id: 1,
    title: 'Incomplete Assignments',
    items: [
      {
        id: 11,
        categoryPreviewComponentName: 'sd-search-category-preview-assignment',
        searchComponentName: 'sa-search-assignment',
        componentName: 'sa-assignment',
        title: 'Artificial Intelligence Paper',
        class: 'CS300',
        points: 150,
        description: 'Is Elon Musk really crazy or is AI going to consume the world? Suggested reading: Wait but why? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            materials: [
              {
                type: 'Word'
              }
            ]
          },
          {
            title: 'Lab',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            materials: [
              {
                type: 'Excel'
              }
            ]
          }
        ],
        events: [
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
        categoryPreviewComponentName: 'sd-search-category-preview-assignment',
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Assignment 1',
        class: 'CS300',
        points: 150,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 13,
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
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
        categoryPreviewComponentName: 'sd-search-category-preview-assignment',
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Midterm 1: Static Analysis',
        description: 'Covers Chapters 1-8: Forces between stationary objects. Remember to read lorem',
        class: 'PHYS200',
        points: 200,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 22,
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Midterm 2: Static Analysis',
        class: 'PHYS200',
        points: 200,
        dueDate: '2015-07-30T12:00:00Z'
      }
    ]
  },
  {
    id: 3,
    type: 'grades',
    title: 'Grade Posted',
    items: [
      {
        id: 31,
        categoryPreviewComponentName: 'sd-search-category-preview-grade',
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Grade 1',
        grade: 91,
        pointsEarned: 74,
        pointsTotal: 80,
        gradeAverage: 85,
        assignmentTitle: 'LCR Circuits Homework',
        overallGradeChange: 0.50,
        class: 'ECE200',
        dueDate: moment().subtract(1, 'days').toJSON()
      }
    ]
  },
  {
    id: 4,
    title: 'New Messages',
    items: [
      {
        id: 41,
        categoryPreviewComponentName: 'sd-search-category-preview-message',
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Fermi-lab Field Trip',
        important: true,
        message: 'Remember to bring your permission slip...'
      },
      {
        id: 42,
        categoryPreviewComponentName: 'sd-search-category-preview-message',
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Message 2',
        important: true,
        message: 'Remember to bring your permission slip...'
      },
      {
        id: 43,
        categoryPreviewComponentName: 'sd-search-category-preview-message',
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Message 3',
        message: 'Remember to bring your permission slip...'
      },
      {
        id: 44,
        categoryPreviewComponentName: 'sd-search-category-preview-message',
        searchComponentName: 'sa-search-test',
        componentName: 'sa-test',
        title: 'Message 4',
        message: 'Remember to bring your permission slip...'
      }
    ]
  }
];

export default Ember.Route.extend({
  model() {
    return categories;
  }
});
