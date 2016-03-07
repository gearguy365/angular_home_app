https://adwords.google.com/um/AcctPref/Home?__u=9029614754&__c=7909829714&authuser=0#apidevelopercenter.

'use strict';
angular.module('myApp')
    .factory('userService', function ($rootScope, StaticResource, $http, $q, $resource) {

        var userList = $resource(
            StaticResource.BASE_URL + 'api/user/list',
            {

            },
            {
                query: {
                            method: 'GET',
                            isArray: false,
                            params: {
                                        user:'@user',
                                        client:'@client',
                                        offset: '@offset',
                                        limit: '@limit',
                                        ordering: '@ordering'
                                    }
                       }
          });

        var userDelete = $resource(
            StaticResource.BASE_URL + 'api/user/delete/:id',
            {

            },
            {
                deleteItem: {
                                method: 'DELETE',
                                params: {
                                            id: '@id'
                                        }
                            }
        });

        return {
            getAllUser: function (params, success, failure) {
                return userList.query(params, success, failure);
            },
            deleteUser: function (userId, success, failure) {
                return userDelete.deleteItem({ id: userId }, success, failure);
            }
        };

    });



'use strict';
angular.module('myApp')
    .service('StaticResource', function () {
        this.BASE_URL = "http://172.16.10.221:8008/";      //DEV server
        //this.BASE_URL = "";      //Local server

        this.DEBUG = true;

    });
