'use strict'
require.config({
    paths: {
        'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min',
        'lazyLoader' : 'node_modules/oclazyload/dist/ocLazyLoad',
        'ngResource': 'node_modules/angular-resource/angular-resource',
        'jquery': 'https://code.jquery.com/jquery-2.2.1.min',
        'ngRoute': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router',
        'uiBootstrap': 'https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.2.3',
        'appjs': 'app',
        'ngAnimate': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate',
        'homeRoutes':'app/home/home.routes',
        'userRoutes':'app/users/user.routes',
        'apiRoutes' : 'app/api/api.routes',
        'StaticResource': 'components/utils/static.resource',
        'logService': 'components/utils/log.service',
        'progressBar': 'node_modules/angular-loading-bar/src/loading-bar'

    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'progressBar': {
            deps : ['angular']
        },
        'ngResource': {
            deps: ['angular']
        },
        'ngRoute': {
            deps: ['angular']
        },
        "uiBootstrap": {
            deps: ['angular']
        },
        'ngAnimate': {
            deps: ['angular']
        },
        'lazyLoader': {
            deps: ['angular']
        },
        'homeRoutes':{
            deps: ['angular']
        },
        'userRoutes':{
            deps: ['angular']
        },
        'apiRoutes':{
            deps: ['angular']
        },
        'StaticResource' :{
            deps: ['angular']
        },
        'logService' : {
            deps: ['angular']
        }
    },
    waitSeconds: 0,
    priority: [
        "angular"
    ]
});


var initiallyLoadedModules = [
    'angular',
    'lazyLoader',
    'ngResource',
    'jquery',
    'ngRoute',
    'uiBootstrap',
    'appjs',
    'ngAnimate',
    'homeRoutes',
    'userRoutes',
    'apiRoutes',
    'StaticResource',
    'logService',
    'progressBar'
];

setTimeout(function () {
    require(initiallyLoadedModules,
    function () {
        $(document).ready(function () {
            angular.bootstrap(document.documentElement, ['app']);
        });
    },
    function (error) {
        require(initiallyLoadedModules, function () {
            angular.bootstrap(document.documentElement, ['app']);
        }
    );
    });
}, 1000);
