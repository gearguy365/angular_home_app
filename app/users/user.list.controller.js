angular.module('app')
.controller('UsersController', function($scope,$state,$stateParams,Data,log){
    $scope.userdata = Data;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.goto = function(id) {
        //the id here has to be same as the "id" delared in state
        $state.go('userprofile', {id:id})
    };
    $scope.delete = function(id) {
        for (var i = 0; i < $scope.userdata.length; i++) {
            if($scope.userdata[i].id == id) {
                $scope.userdata.splice(i,1);
                console.log($scope.userdata);
            }
        }
    };
});
