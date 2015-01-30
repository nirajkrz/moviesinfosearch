/**
 * Created by Niraj_Kumar on 1/18/2015.
 */
(function(){
    'use strict';
    app.controller('SearchCtrl', ['$scope', 'MovieDB', function($scope, MovieDB) {

        $scope.initiateSearch = function (searchText) {
            console.log("input value provided::- " + searchText);
            if (searchText.length > 2) {
                MovieDB.getMovieData(searchText).then(function (data) {
                    // promise fulfilled
                    console.log("successFul Api call..!!");

                    $scope.movies = data.movies;
                    //$scope.movies=['a','b','c'];

                    var key;
                    for (key in $scope.movies){
                        console.log($scope.movies[key]);
                    }
                }, function (error) {
                    // promise rejected, could log the error with: console.log('error', error);
                    console.error("OOPS, Something went wrong..!!", error);
                });


    //    $scope.$watch('searchText',  $scope.initiateSearch);
            }
        };
    }]);
})();
