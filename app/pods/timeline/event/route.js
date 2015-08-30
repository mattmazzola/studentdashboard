import Ember from 'ember';

export default Ember.Route.extend({
  model(urlParams) {
    return this.store.findRecord('event', urlParams.event_id);
  }
});
