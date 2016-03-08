define(['angular'], function(angular) {
    var app = angular.module('app', ['oc.lazyLoad','ui.router','ngAnimate', 'ui.bootstrap', 'ngResource']);

    app.config(function ($ocLazyLoadProvider,$stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $ocLazyLoadProvider.config({
            loadedModules : ['app'],
            asyncLoader: require
        });
    });
    return app;
﻿});
