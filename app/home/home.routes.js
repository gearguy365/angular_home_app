angular.module('app')
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl:'app/home/home.html',
        resolve: {
                   load: function($ocLazyLoad) {
                       return $ocLazyLoad.load ({
                           files: ['app/home/home.controller.js']
                       });
                   }
               }
    })
});
