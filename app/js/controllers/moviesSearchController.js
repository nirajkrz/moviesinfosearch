/**
 * Created by Niraj_Kumar on 1/18/2015.
 */
(function(){
    'use strict';
    app.controller('SearchCtrl', ['$scope', 'MovieDB', function($scope, MovieDB) {

        $scope.initiateSearch = function (searchText) {
            console.log("input value provided::- " + searchText);
            $scope.warnTheUser= false;
            $scope.dataAvailable= false;
            $scope.errorOccurred= false;
            $scope.errorOccurred= false;
            if (searchText.length > 2) {
                MovieDB.getMovieData(searchText).then(function (data) {
                    // promise fulfilled
                    console.log("successFul Api call..!!");
                //check if data returned has something in it
                    if(data.movies.length >= 1) {
                        $scope.movies = data.movies;
                        $scope.dataAvailable = true;
                        var key;
                        for (key in $scope.movies) {
                            console.log($scope.movies[key]);
                        }
                    }else{
                        $scope.errorOccurred= true;
                    }
                }, function (error) {
                    // promise rejected, could log the error with: console.log('error', error);
                    console.error("OOPS, Something went wrong..!!", error);
                    $scope.errorOccurred= true;
                });


            }else{
                $scope.warnTheUser= true;
            }
        };

        //$scope.$watch('movies.searchTxt',  $scope.initiateSearch);
    }]);
})();
