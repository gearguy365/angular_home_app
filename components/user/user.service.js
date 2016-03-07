angular.module('app')
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
         },
         {
              id:4,
              firstname:"Baggy",
              lastname:"bag",
              email:"bag@gmail.com"
           },
           {
                id:5,
                firstname:"Jhon",
                lastname:"papa",
                email:"papa@gmail.com"
             }];
          return userdata;
});
