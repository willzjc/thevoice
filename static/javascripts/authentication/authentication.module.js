(function () {
    'use strict';

    angular
        .module('ts.authentication', [
            'ts.authentication.controllers',
            'ts.authentication.services'
        ]);

    angular
        .module('ts.authentication.controllers', []);

    angular
        .module('ts.authentication.services', ['ngCookies']);
})();