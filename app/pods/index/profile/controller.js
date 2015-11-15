import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Controller.extend({
  session: inject.service(),
  sessionAccount: inject.service('session-account'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
