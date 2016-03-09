angular.module('app')
.controller('UsersController', function($scope,$state,$stateParams,Data,log){
    $scope.userdata = Data;
    //$scope.paginatedUserData = $scope.userdata.slice(0,5);

    $scope.viewby = 3;//initially how much you wanna see
    $scope.totalItems = $scope.userdata.length;//how many items are in the array
    $scope.currentPage = 1;//the current page number

    $scope.itemsPerPage = $scope.viewby;//how many items i wanna see per page, initally set to the value set in viewby
    $scope.maxSize = 5; //Number of pager buttons to show

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    //just a  console log, no other functionality
    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    }

    $scope.goto = function(id) {
        //the id here has to be same as the "id" delared in state
        $state.go('userprofile', {id:id})
    };

    $scope.delete = function(id) {
        for (var i = 0; i < $scope.userdata.length; i++) {
            if($scope.userdata[i].id == id) {
                $scope.userdata.splice(i,1);
                log.console($scope.userdata,'error');
            }
        }
    };
});
