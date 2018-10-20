/**
 * Rating
 * @namespace ts.ratings.directives
 */
(function () {
    'use strict';

    angular
        .module('ts.ratings.directives')
        .directive('rating', rating);

    /**
     * @namespace Rating
     */
    function rating() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @memberOf ts.ratings.directives.Rating
         */
        var directive = {
            restrict: 'E',
            scope: {
                rating: '='
            },
            templateUrl: '/static/templates/ratings/rating.html'
        };

        return directive;
    }
})();