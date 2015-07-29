import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        name: 'item 1'
      },
      {
        id: 2,
        name: 'item 2'
      },
      {
        id: 3,
        name: 'item 3'
      }
    ];
  }
});
