angular.module('app')
.controller('UserAccountController', function($scope, $stateParams, Data, $uibModal, $log){
    $scope.userdata = Data;
    $scope.userid = $stateParams.id;
    $scope.getPerson = function () {
        for (var i = 0; i < $scope.userdata.length; i++) {
            if($scope.userdata[i].id == $scope.userid) {
                return $scope.userdata[i];
            }
        }
    };
    //************************************************
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          },
          userinput:function() {
              return $scope.userinput;
          }

        }
      });

      modalInstance.result.then(function (userinput) {
        //$scope.selected = selectedItem;
        $scope.userinputdisplay = userinput;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, userinput) {

    $scope.items = items;
    $scope.userinput = userinput;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.userinput);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
