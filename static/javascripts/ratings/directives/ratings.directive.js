/**
 * Ratings
 * @namespace ts.ratings.directives
 */
(function () {
    'use strict';

    angular
        .module('ts.ratings.directives')
        .directive('ratings', ratings);

    /**
     * @namespace Ratings
     */
    function ratings() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @memberOf ts.ratings.directives.Ratings
         */
        var directive = {
            controller: 'RatingsController',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                ratings: '='
            },
            templateUrl: '/static/templates/ratings/ratings.html'
        };

        return directive;
    }
})();