import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
  		{
        id: 1,
  			dueDate: '2015-08-03T08:00:00Z',
  			title: 'Assignment 1',
  			description: 'zxcvzxcv',
  			classId: 'ECE200',
  		},
  		{
        id: 2,
  			dueDate: '2015-08-10T08:00:00Z',
  			title: 'Assignment 2',
  			description: 'asdfasd',
  			classId: 'CHEM330',
  		},
  		{
        id: 3,
  			dueDate: '2015-08-16T08:00:00Z',
  			title: 'Assignment 3',
  			description: 'wqerqwe',
  			classId: 'PHYS200',
  		},
  		{
        id: 4,
  			dueDate: '2015-08-17T08:00:00Z',
  			title: 'Assignment 4',
  			description: 'qwerqw',
  			classId: 'MATH300',
  		},
  		{
        id: 5,
  			dueDate: '2015-08-18T08:00:00Z',
  			title: 'Assignment 5',
  			description: '23452345262345',
  			classId: 'PSY100',
  		}
  	];
  },

  actions: {
    itemClicked(item) {
      this.transitionTo("timeline.event", item);
    },

    brushMoved(brush) {
      console.log(`Brush Moved: `, brush);
    }
  }
});
