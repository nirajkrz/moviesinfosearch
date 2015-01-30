/**
 * Created by Niraj_Kumar08 on 1/15/2015.
 */
(function (){


    'use strict';

    app.factory('loginService', function($http){
       return{
           login:function(user, $scope){
            console.log("inside login service");
               var $promise= $http.get('data/userdata.Json');
               $promise.then(function(response){
                    var userdata= response.data.User;
                   if(userdata.mail== user.mail){
                       console.log("login successful!!");
                       $scope.msgTxt= "Successful login!!";
                       $scope.validUser="true";
                   }else{
                       console.log("Oops!! There is some error while trying to login");
                       $scope.msgTxt="Oops!! There is some error while trying to login";
                   }

               });
           }

       }

        });
})();