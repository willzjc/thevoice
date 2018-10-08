/**
 * Post
 * @namespace ts.posts.directives
 */
(function () {
    'use strict';

    angular
        .module('ts.posts.directives')
        .directive('post', post);

    /**
     * @namespace Post
     */
    function post() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @memberOf ts.posts.directives.Post
         */
        var directive = {
            restrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/templates/posts/post.html'
        };

        return directive;
    }
})();