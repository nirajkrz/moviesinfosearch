/**
 * Created by Niraj_Kumar08 on 1/18/2015.
 */

'use strict';
angular.module('myApp.services', [])
    .service('MovieDB', ['$q', '$http', function($q, $http){
        var d;
        var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0';
        var API_KEY = '34ymvz34c6ye7u57qm3cmez4';
        var moviesSearchUrl = API_URL +'/movies.json?apikey=' + API_KEY;

        return{
              getMovieData: function(searchText){
                  return $http.get(moviesSearchUrl, { params: { q: searchText } })
                      .then(function(response) {
                          if (typeof response.data === 'object') {
                              return response.data;
                          } else {
                              // invalid response
                              return $q.reject(response.data);
                          }

                      }, function(response) {
                          // something went wrong
                          return $q.reject(response.data);
                      });
              }
    };

       /* this.searchMovies = function(term) {
            if (d){
                log('cancel earlier search, now searching: '+term);
                d.resolve();
            }
            d = $q.defer();

            var movies = [];

            var totalPages = 1;
            var promises = [];

            // first get, for totalPages
            $http.get(API_URL, {
                params: {
                    api_key: API_KEY,
                    query: term,
                    rnd: Math.random()   // prevent cache
                    //page: 1,
                },
                timeout: d.promise
            }).then(function(result){
                log('got 1st page')
                angular.forEach(result.data.results, function(item){
                    movies.push(item);
                })
                totalPages = result.data.total_pages;
                var iMax = Math.min(totalPages, 9);    // max pages to get
                for(var i=2; i<=iMax; i++){
                    promises.push(
                        $http.get(API_URL, {
                            params: {
                                api_key: API_KEY,
                                query: term,
                                search_type: 'ngram',
                                rnd: Math.random(),   // prevent cache
                                page: i
                            },
                            timeout: d.promise
                        })
                    );
                }
                return $q.all(promises).then(function(results){
                    angular.forEach(results, function(resultItem){
                        angular.forEach(resultItem.data.results, function(item){
                            movies.push(item);
                        })
                    })
                    movies.sort(predicatBy("popularity")).reverse();
                    movies = movies.slice(0,20);
                    d.resolve(movies);
                });
            });
            return d.promise;
        }*/
    }]);