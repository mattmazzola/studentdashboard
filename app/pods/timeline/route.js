import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
  		{
  			dueDate: '2015-08-03T08:00:00Z',
  			title: 'Assignment 1',
  			description: 'zxcvzxcv',
  			classId: 1,
  		},
  		{
  			dueDate: '2015-08-10T08:00:00Z',
  			title: 'Assignment 2',
  			description: 'asdfasd',
  			classId: 2,
  		},
  		{
  			dueDate: '2015-08-16T08:00:00Z',
  			title: 'Assignment 3',
  			description: 'wqerqwe',
  			classId: 1,
  		},
  		{
  			dueDate: '2015-08-17T08:00:00Z',
  			title: 'Assignment 4',
  			description: 'qwerqw',
  			classId: 2,
  		},
  		{
  			dueDate: '2015-08-18T08:00:00Z',
  			title: 'Assignment 5',
  			description: '23452345262345',
  			classId: 2,
  		}
  	];
  },

  actions: {
    itemClicked(item) {
      this.transitionTo("timeline.event", item);
    }
  }
});
