angular.module('app')
.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('api',{
        url:'/APICall',
        templateUrl:'app/api/api.html',
        controller:'ApiController',
        resolve: {
                   load: function($ocLazyLoad) {
                       return $ocLazyLoad.load ({
                           files: ['app/api/api.controller.js','components/user/api.service.js']
                       });
                   }
               }
    });
});
