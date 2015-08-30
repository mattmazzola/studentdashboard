import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://localhost:44350',
  namespace: 'api'
});
