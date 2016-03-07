angular.module('app')
.factory('UserService', function($resource,StaticResource){
    var userList = $resource('http://jsonplaceholder.typicode.com/users/:id',{id: "@userId"},{
        query: { method: "GET", isArray: true },
        get: { method:"GET", isArray: false}
    });
    //var userList = $resource(StaticResource.BASE_URL+'/:id', {id: "@userId"});

    return {
        getUser: function(params){
            var res = userList.get(params);
            console.log(res)
            return res;
        },
        getUserList: function(){
            return userList.query();
        }
    };
});
