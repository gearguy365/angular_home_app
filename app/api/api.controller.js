angular.module('app')
.controller('ApiController', function($scope,UserService,log){
    $scope.userPromise = UserService.getUserList();
    $scope.users;
    $scope.userPromise.$promise.then(function (result) {
        $scope.users = result;
    });

    $scope.userPromise.$promise.then(function success(result) {
        $scope.users = result;
    },
    function error(error) {
        console.log(error);
        //notificationFactory.error();
        $scope.users = [{'message':'could not fetch any data'}]
    });
    //console.log($scope.users);
    //$scope.oneUser = UserService.get({user:1});
    $scope.oneUser = [];
    //console.log($scope.oneUser);
    //log.console($scope.oneUser,null);
});
/*
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'}
};
*/
