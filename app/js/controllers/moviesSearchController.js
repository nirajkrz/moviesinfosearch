/**
 * Created by Niraj_Kumar08 on 1/18/2015.
 */

'use strict';
app.controller('SearchCtrl', ['$scope', 'MovieDB', function($scope, MovieDB) {
    $scope.searchText = "";
    $scope.movies = [];

    $scope.initiateSearch = function (searchText) {
        console.log("input value provided::- " + searchText);
        if (searchText.length > 2) {
            MovieDB.getMovieData(searchText).then(function (data) {
                // promise fulfilled
                console.log("successFulApi call..!!");
            }, function (error) {
                // promise rejected, could log the error with: console.log('error', error);
                console.error("OOPS, Something went wrong..!!")
            });


//    $scope.$watch('searchText',  $scope.initiateSearch);
        }
    };
}]);
