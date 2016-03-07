angular.module('app')
.service('log',function(StaticResource,$log){

        this.console=function(obj,type) {
            if(StaticResource.DEBUG) {
                if (type == 'error') {
                    $log.error(obj);
                }
                else {
                    console.log(obj);
                }
            }
        };
});
