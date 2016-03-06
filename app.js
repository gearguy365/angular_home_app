angular.module('app', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl:'app/home/home.html'
    })
    .state('users', {
        url: '/userList',
        templateUrl:'app/users/user.list.html',
        controller:'UsersController'
    })
    .state('users.userprofile', {
        url: '/:id',
        templateUrl:'app/users/user.profile.html',
        controller:'UserAccountController'
    });

    $urlRouterProvider.otherwise('/home');
})
.controller('UsersController', function($scope,$state){
    $scope.userdata = [
          {
             id:1,
             firstname:"Scott",
             lastname:"Jhon",
             email:"scott@gmail.com"
          },
          {
             id:2,
             firstname:"Jhon",
             lastname:"Doe",
             email:"Jhon@gmail.com"
          },
          {
             id:3,
             firstname:"greg",
             lastname:"papa",
             email:"greg@gmail.com"
          }];
          $scope.goto = function(id) {
              //the id here has to be same as the id in state
              $state.go('users.userprofile', {id:id})
          };
})
.controller('UserAccountController', function($scope,$stateParams,Data){
    $scope.userdata = Data;
    /*
    $scope.userdata =[{
             id:1,
             firstname:"Scott",
             lastname:"Jhon",
             email:"scott@gmail.com"
          },
          {
             id:2,
             firstname:"Jhon",
             lastname:"Doe",
             email:"Jhon@gmail.com"
          },
          {
             id:3,
             firstname:"greg",
             lastname:"papa",
             email:"greg@gmail.com"
          }];
          */
    $scope.userid = $stateParams.id;
    $scope.getPerson = function () {
        for (var i = 0; i < $scope.userdata.length; i++) {
            if($scope.userdata[i].id == $scope.userid) {
                return $scope.userdata[i];
            }
        }
    }
})

.factory('Data', function() {
    var userdata =
        [{
             id:1,
             firstname:"Scott",
             lastname:"Jhon",
             email:"scott@gmail.com"
          },
          {
             id:2,
             firstname:"Jhon",
             lastname:"Doe",
             email:"Jhon@gmail.com"
          },
          {
             id:3,
             firstname:"greg",
             lastname:"papa",
             email:"greg@gmail.com"
          }];
          return userdata;
});
