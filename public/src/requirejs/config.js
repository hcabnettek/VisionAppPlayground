require.config({
  baseUrl: '..',
  paths: {
    'jquery': 'jquery/jquery',
    'moment': 'moment/moment',
    'domReady':'requirejs-domready/domReady',
    'angular': 'angular/angular',
    'uiRouter': 'angular-ui-router/release/angular-ui-router',
    'underscore': 'lodash/dist/lodash.underscore',
    'lodash': 'lodash/dist/lodash',
    'angularLodash': 'angular-lodash/angular-lodash',
    'uiBootstrap': 'angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.10.0',
    'uiUtils': 'angular-ui-utils/ui-utils',
    'angularMoment': 'angular-moment/angular-moment',
    'json2': 'json2/json2',
    'restangular': 'restangular/dist/restangular',
    'templates': 'vision/templates'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    'angularLodash': {
      deps: ['angular', 'lodash']
    },
    'angularMoment': {
      deps: ['angular', 'moment']
    },
    'uiBootstrap': {
      deps: ['angular']
    },
    'uiUtils': {
      deps: ['angular']
    },
    'restangular': {
      deps: ['angular']
    }


  },
  deps : ['../../components/vision/bootstrap']
});