/**
 * Ratings
 * @namespace ts.ratings.services
 */
(function () {
    'use strict';

    angular
        .module('ts.ratings.services')
        .factory('Ratings', Ratings);

    Ratings.$inject = ['$http'];

    /**
     * @namespace Ratings
     * @returns {Factory}
     */
    function Ratings($http) {
        var Ratings = {
            all: all,
            create: create,
            get: get
        };

        return Ratings;

        ////////////////////

        /**
         * @name all
         * @desc Get all Ratings
         * @returns {Promise}
         * @memberOf ts.ratings.services.Ratings
         */
        function all() {
            return $http.get('/api/v1/ratings/');
        }


        /**
         * @name create
         * @desc Create a new song
         * @param {string} content The content of the new song entry
         * @returns {Promise}
         * @memberOf ts.ratings.services.Ratings
         */
        function create(content) {
            return $http.post('/api/v1/ratings/', {
                content: content
            });
        }

        /**
         * @name get
         * @desc Get the Ratings of a given user
         * @param {string} post_id The post_id to get Ratings for
         * @returns {Promise}
         * @memberOf ts.ratings.services.Ratings
         */
        function get(post_id) {
            // console.log(post_id);
            return $http.get('/api/v1/postdetails/' + post_id + '/reviews/');
        }
    }
})();