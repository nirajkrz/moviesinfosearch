/**
 * Created by Niraj_Kumar on 1/15/2015.
 */

(function(){
    'use strict';

    app.controller('loginController', LoginCtrlFunc);
    LoginCtrlFunc.$inject = ["$scope", "loginService", "$location"];
    function LoginCtrlFunc($scope, loginService, $location) {
        $scope.msgTxt='';
        $scope.login= function(user){
            console.log("Inside loginController");
            loginService.login(user, $scope);//calling login service
            $location.path( "/home" );
        };

    }

})();
