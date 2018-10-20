(function () {
    'use strict';

    angular
        .module('ts.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    /**
     * @name config
     * @desc Define valid application routes
     */
    function config($routeProvider) {
        $routeProvider.when('/register', {
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/login.html'
        }).when('/post_details/+:post_id', {
            controller: 'PostDetailController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/post_details/post_details.html'
        // }).when('/post_details/+:', {
        //     controller: 'PostDetailController',
        //     controllerAs: 'vm',
        //     templateUrl: '/static/templates/post_details/post_details.html'
        }).when('/+:username', {
            controller: 'ProfileController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/profiles/profile.html'
        }).when('/+:username/settings', {
            controller: 'ProfileSettingsController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/profiles/settings.html'
        }).when('/', {
            controller: 'IndexController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/layout/index.html'
        }).otherwise('/');
    }
})();