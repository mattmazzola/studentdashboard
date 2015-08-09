import Ember from 'ember';

export default Ember.Component.extend({
  isCollapsed: true,

  actions: {
    toggleExpand() {
      this.set('isCollapsed', !this.get('isCollapsed'));
    }
  }
});
