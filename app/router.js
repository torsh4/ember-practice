import EmberRouter from '@ember/routing/router';
import config from 'ember-practice/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/:location_key' });
  this.route('index', { path: '/' });
});
