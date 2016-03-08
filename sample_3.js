define([], function () {
    var app = angular.module('mainModule', ['ui.router','oc.lazyLoad']);
    app.config(['$ocLazyLoadProvider','$stateProvider', '$urlRouterProvider',
        function ($ocLazyLoadProvider,$stateProvider, $urlRouterProvider) {
            $ocLazyLoadProvider.config({
                loadedModules: ['mainModule'],
                asyncLoader: require
            });
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'lazy/home.html'
                })
                .state('module1', {
                    url: '/module1',
                    templateUrl: 'lazy/module1/module1.html',
                    resolve: {
                        load: function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'module1',
                                files: ['lazy/module1/module.js']

                            });
                        }
                    }
                })
                .state('module2', {
                    url: '/module2',
                    templateUrl: 'lazy/module2/module2.html',
                    resolve: {
                        load: function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'module2',
                                files: ['lazy/module2/module.js']
                            });
                        }
                    }
                });
        }]);
    app.bootstrap = function () {
        angular.bootstrap(document, ['mainModule']);
    };
    return app;
});
