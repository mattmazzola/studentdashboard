import Ember from 'ember';

export default Ember.Component.extend({
  isClassesMenuVisible: false,

  actions: {
    classesCommandClicked() {
      console.log(`commandClicked`);
      this.toggleProperty('isClassesMenuVisible');
    },

    dropDownItemClicked() {
      console.log(`dropDownItemClicked`);
    },

    projectionsCommandClicked() {
      console.log(`commandClicked`);
    },

    holidaysCommandClicked() {
      console.log(`commandClicked`);
    }
  }
});
