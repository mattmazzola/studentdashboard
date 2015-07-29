import Ember from 'ember';

export default Ember.Controller.extend({

  isCollapsed: true,

  actions: {
    toggleExpand() {
      this.set('isCollapsed', !this.get('isCollapsed'));
    }
  }
});
