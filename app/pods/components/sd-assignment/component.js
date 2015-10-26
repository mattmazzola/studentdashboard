import Ember from 'ember';

const {
  on
} = Ember;

export default Ember.Component.extend({
  activities: null,
  description: '',
  dueDate: '',
  tags: null,
  title: '',
  visibleDate: null,

  setupModel: on('init', function() {
    this.visibleDate = moment().add(1, 'day');
    this.dueDate = moment().add(7, 'day');
    this.tags = [];
    this.activities = [];

    this.set('model', {} )
  }),

  actions: {
    addActivityClicked() {
      const activity = Ember.Object.create({
        title: 'Activity Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        points: null
      });

      this.get('activities').pushObject(activity);
    },

    saveClicked() {
      console.log(`save clicked`);
    }
  }
});
