angular.module('app')
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
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
})
