import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    save(assignment) {
      // Save current user as author
      // question.author = this.get('session.currentUser');

      var assignmentRecord = this.store.createRecord('assignment', assignment);
      assignmentRecord.save();
    }
  }
});
