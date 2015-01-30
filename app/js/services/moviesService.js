/**
 * Created by Niraj_Kumar08 on 1/18/2015.
 */

(function() {
    'use strict';
    angular.module('myApp.services', [])
        .service('MovieDB', ['$q', '$http', function ($q, $http) {
            var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0';
            var API_KEY = '34ymvz34c6ye7u57qm3cmez4';
            var moviesSearchUrl = API_URL + '/movies.json?apikey=' + API_KEY;
            var deferred = $q.defer();
            return{
                getMovieData: function (searchText) {
                    return $http.get(moviesSearchUrl, {
                        params: { q: searchText }
                    })
                        .then(function (response) {
                            if (typeof response.data === 'object') {
                                return response.data;
                                //at whatever point in the code, you feel your
                                // code has loaded all necessary data and/or
                                // resolve your promise.
                                deferred.resolve(response.data);
                            } else {
                                // invalid response
                                return $q.reject(response.data);
                            }

                        }, function (response) {
                            // something went wrong
                            return $q.reject(response.data);
                        });
                }
            };


        }]);
})();