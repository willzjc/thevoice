(function () {
    'use strict';

    angular
        .module('ts', [
            'ts.config',
            'ts.routes',
            'ts.authentication',
            'ts.layout',
            'ts.posts',
            'ts.utils',
            'ts.post_details',
            'ts.profiles'
        ]);

    angular
        .module('ts.config', []);

    angular
        .module('ts.routes', ['ngRoute']);

    angular
        .module('ts')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();