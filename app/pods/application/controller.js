import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Controller.extend({
  session: inject.service('session'),
  
  isCollapsed: true,

  actions: {
    toggleExpand() {
      this.set('isCollapsed', !this.get('isCollapsed'));
    }
  }
});
