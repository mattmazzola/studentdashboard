import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        title: 'item 1'
      },
      {
        id: 2,
        title: 'item 2'
      },
      {
        id: 3,
        title: 'item 3'
      }
    ];
  }
});
