import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Controller.extend({
  session: inject.service(),

  actions: {
    authenticateWithFacebook() {
      this.get('session').authenticate('authenticator:torii', 'facebook');
    }
  }
});
