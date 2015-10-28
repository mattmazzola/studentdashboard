import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
