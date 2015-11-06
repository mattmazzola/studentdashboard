import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Service.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service('store'),

  user: Ember.computed('session.data.authenticated', function() {
    return this.get('session.data.authenticated');
  })
});
