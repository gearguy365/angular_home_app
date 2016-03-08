angular.module('app')
.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('api',{
        url:'/APICall',
        templateUrl:'app/api/api.html',
        controller:'ApiController'
    });
});
