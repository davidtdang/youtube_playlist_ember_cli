import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('playlists', function() {
    this.route('index', {path: "/index"});
    this.route('create', {path: "/create"});
    this.route('show', {path: "/:playlist_id"}, function() {
      this.route('search');
    });
  });
});

export default Router;
