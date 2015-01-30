/**
 * Created by Niraj_Kumar08 on 1/26/2015.
 */

(function(){

    'use strict';

    app.directive('moviesDetails', function(){
        return{
            restrict: 'AE',
            loadedTemplateUrl:'/partials/tpl/movies-details.tpl.html',
            scope: false,

            link: function(scope){
                scope.movieCheck=scope.movies;
                scope.aabc='shdhscacs';
            }

        }

    });
})();