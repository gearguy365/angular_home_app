angular.module('app')
.service('StaticResource', function () {
        this.BASE_URL = "http://jsonplaceholder.typicode.com/users";
        this.DEBUG = true;
});
