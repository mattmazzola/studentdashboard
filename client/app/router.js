import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' }, function () {
    this.route('item', { path: '/:item_id' });
  });
  this.route('timeline', function() {
    this.route('event', { path: '/:event_id' });
  });
});

export default Router;
