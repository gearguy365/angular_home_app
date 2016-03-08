'use strict'
angular.module('app')
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('users', {
        url: '/usersList',
        templateUrl:'app/users/user.list.html',
        controller:'UsersController',
        resolve: {
                   load: function($ocLazyLoad) {
                       return $ocLazyLoad.load ({
                           files: ['app/users/user.list.controller.js','components/user/user.service.js']
                       });
                   }
               }
    })
    .state('userprofile', {
        url: '/user/:id',
        templateUrl:'app/users/user.profile.html',
        controller:'UserAccountController',
        resolve: {
                   load: function($ocLazyLoad) {
                       return $ocLazyLoad.load ({
                           files: ['app/users/user.profile.controller.js']
                       });
                   }
               }
    })

})
