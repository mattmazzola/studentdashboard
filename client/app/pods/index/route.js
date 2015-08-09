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
        pointsEarned: null,
        pointsTotal: 150,
        description: 'Is Elon Musk really crazy or is AI going to consume the world? Suggested reading: Wait but why? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        dueDate:  moment().add(2, 'days').toJSON(),
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
        searchComponentName: 'sa-search-assignment',
        componentName: 'sa-assignment',
        title: 'Mad Max: Analysis of post-apocolyptic culture',
        description: 'Watch Mad Max and try to compare their culture to our current society.  Note the scarcity of resources and conflict. Are there parts of our current world which exhibit these charateristics?',
        pointsEarned: null,
        pointsTotal: 80,
        class: 'PSYC100',
        dueDate: moment().add(5, 'days').toJSON(),
        tags: [
          {
            name: 'homework'
          },
          {
            name: 'mad max'
          },
          {
            name: 'post-apocolyptic'
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
          }
        ],
        events: [
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Created'
          }
        ]
      },
      {
        id: 13,
        categoryPreviewComponentName: 'sd-search-category-preview-assignment',
        searchComponentName: 'sa-search-assignment',
        componentName: 'sa-assignment',
        title: 'Adamantium Lab: Make the strongest metal on eath',
        description: 'In this weeks lab we\'re going to have some fun!  By mixing X and Y we will try to produce Adamantium.  Yes, that\'s right you can make the same metal used by Wolverine in X-men.  The group with the highest yeild wins a prize.',
        class: 'CS300',
        pointsEarned: 100,
        pointsTotal: 150,
        dueDate: moment().add(7, 'days').toJSON(),
        tags: [
          {
            name: 'lab'
          },
          {
            name: 'adamantium'
          },
          {
            name: 'x-men'
          }
        ],
        activities: [
          {
            title: 'Lab',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            materials: []
          }
        ],
        events: [
          {
            date: '2015-07-20T11:05:00Z',
            title: 'Created'
          },
          {
            date: '2015-07-22T11:05:00Z',
            title: 'Posted'
          }
        ]
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
        searchComponentName: 'sa-search-assignment',
        componentName: 'sa-assignment',
        title: 'Midterm 1: Static Analysis',
        description: 'Covers Chapters 1-8: Forces between stationary objects. Remember to read lorem',
        class: 'PHYS200',
        points: 200,
        dueDate: '2015-07-30T12:00:00Z'
      },
      {
        id: 22,
        categoryPreviewComponentName: 'sd-search-category-preview-assignment',
        searchComponentName: 'sa-search-assignment',
        componentName: 'sa-assignment',
        title: 'Stoichiometry and Balancing Reactions',
        description: 'Covers chapters 5-7.  Be prepared to show Lewis dot structures, and solve equations. Don\' forget to specify units and explain your answers!',
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
        searchComponentName: 'sd-search-grade',
        componentName: 'sa-assignment',
        title: 'LCR Circuits Homework',
        grade: 91,
        pointsEarned: 74,
        pointsTotal: 80,
        gradeAverage: 85,
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
        searchComponentName: 'sd-search-message',
        componentName: 'sa-test',
        title: 'Fermi-lab Field Trip',
        author: {
          name: 'John Patrick'
        },
        datePosted: moment().subtract(1, 'hour').toJSON(),
        important: true,
        message: 'Remember to bring your permission slip...'
      },
      {
        id: 42,
        categoryPreviewComponentName: 'sd-search-category-preview-message',
        searchComponentName: 'sd-search-message',
        componentName: 'sa-test',
        title: 'Robotics Club',
        author: {
          name: 'Tim'
        },
        datePosted: moment().subtract(3, 'hour').toJSON(),
        important: true,
        message: 'Robotics Club Kickoff Meeting on Saturday, January 1st! Bring your tools and your passion for inventing!'
      },
      {
        id: 43,
        categoryPreviewComponentName: 'sd-search-category-preview-message',
        searchComponentName: 'sd-search-message',
        componentName: 'sa-test',
        title: 'Meat Club',
        author: {
          name: 'Brian Smith'
        },
        datePosted: moment().subtract(5, 'hour').toJSON(),
        message: 'Meat Club @ Mongolian BBQ on 9/22'
      },
      {
        id: 44,
        categoryPreviewComponentName: 'sd-search-category-preview-message',
        searchComponentName: 'sd-search-message',
        componentName: 'sa-test',
        title: 'Waterpolo',
        author: {
          name: 'Jeremy'
        },
        datePosted: moment().subtract(10, 'hour').toJSON(),
        import: true,
        message: 'Waterpolo practice cancelled!  Technicians are coming into look at the pump/filter system for the pool.'
      }
    ]
  }
];

export default Ember.Route.extend({
  model() {
    return categories;
  }
});
