import Ember from 'ember';

export default Ember.Component.extend({
  isCollapsed: true,

  actions: {
    toggleExpand() {
      console.log('isCollapsed!');
      this.set('isCollapsed', !this.get('isCollapsed'));
    }
  }
});
