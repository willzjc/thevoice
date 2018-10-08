/**
 * Posts
 * @namespace ts.posts.services
 */
(function () {
    'use strict';

    angular
        .module('ts.posts.services')
        .factory('Posts', Posts);

    Posts.$inject = ['$http'];

    /**
     * @namespace Posts
     * @returns {Factory}
     */
    function Posts($http) {
        var Posts = {
            all: all,
            create: create,
            get: get
        };

        return Posts;

        ////////////////////

        /**
         * @name all
         * @desc Get all Posts
         * @returns {Promise}
         * @memberOf ts.posts.services.Posts
         */
        function all() {
            return $http.get('/api/v1/posts/');
        }


        /**
         * @name create
         * @desc Create a new song
         * @param {string} content The content of the new song entry
         * @returns {Promise}
         * @memberOf ts.posts.services.Posts
         */
        function create(content) {
            return $http.post('/api/v1/posts/', {
                content: content
            });
        }

        /**
         * @name get
         * @desc Get the Posts of a given user
         * @param {string} username The username to get Posts for
         * @returns {Promise}
         * @memberOf ts.posts.services.Posts
         */
        function get(username) {
            return $http.get('/api/v1/accounts/' + username + '/posts/');
        }
    }
})();