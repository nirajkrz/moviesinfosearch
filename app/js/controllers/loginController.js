/**
 * Created by Niraj_Kumar08 on 1/15/2015.
 */

(function(){
    'use strict';

    app.controller('loginController', function($scope, loginService, $location){
        $scope.msgTxt='';
        $scope.login= function(user){
            console.log("Inside loginController");
            loginService.login(user, $scope);//calling login service
            $location.path( "/home" );
        };

    });

})();