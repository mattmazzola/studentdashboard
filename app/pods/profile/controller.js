import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Controller.extend({
  session: inject.service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
