angular.module('app')
.controller('UserAccountController', function($scope,$stateParams,Data){
    $scope.userdata = Data;
    $scope.userid = $stateParams.id;
    $scope.getPerson = function () {
        for (var i = 0; i < $scope.userdata.length; i++) {
            if($scope.userdata[i].id == $scope.userid) {
                return $scope.userdata[i];
            }
        }
    }
});﻿
