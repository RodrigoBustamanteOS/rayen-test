import environment from './environment';
import $ from 'jquery';
// import 'bootstrap';
// import moment from 'moment';


export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }
  
  aurelia.use
    .plugin('aurelia-validation');

  aurelia.start().then(() => aurelia.setRoot());
}
