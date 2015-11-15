import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(assignment) {
      // Save current user as author
      // question.author = this.get('session.currentUser');

      var assignmentRecord = this.store.createRecord('assignment', assignment);
      assignmentRecord.save();
    }
  }
});
