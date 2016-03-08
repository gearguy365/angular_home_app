angular.module('app')
.controller('ApiController', function($scope,UserService,log){
    $scope.userPromise = UserService.getUserList();
    $scope.users;
    $scope.error = {'status':'no error'};
    $scope.userPromise.$promise.then(function (success) {
        $scope.users = success;
        console.log(success);
    }, function (error) {
        $scope.error = error;
        console.log(error);
    }).catch(function (exception) {
     console.log(exception);
    });

    $scope.oneUser = [];
});
/*
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'}
};
*/
