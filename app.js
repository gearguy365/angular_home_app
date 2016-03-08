angular.module('app', ['ui.router','ngAnimate', 'ui.bootstrap', 'ngResource'])
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});
