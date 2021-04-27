import EmberRouter from '@ember/routing/router';
import config from 'embroider-ember-3-27-beta-repro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
