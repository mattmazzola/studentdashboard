import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
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
