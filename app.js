angular.module('app', ['ui.router','ngAnimate', 'ui.bootstrap', 'ngResource'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl:'app/home/home.html'
    })
    .state('users', {
        url: '/usersList',
        templateUrl:'app/users/user.list.html',
        controller:'UsersController'
    })
    .state('userprofile', {
        url: '/user/:id',
        templateUrl:'app/users/user.profile.html',
        controller:'UserAccountController'
    })
    .state('api',{
        url:'/APICall',
        templateUrl:'app/api/api.html',
        controller:'ApiController'
    });

    $urlRouterProvider.otherwise('/home');
});
