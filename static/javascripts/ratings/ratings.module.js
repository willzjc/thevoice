(function () {
  'use strict';

  angular
    .module('ts.ratings', [
      'ts.ratings.controllers',
      'ts.ratings.directives',
      'ts.ratings.services'
    ]);

  angular
    .module('ts.ratings.controllers', []);

  angular
    .module('ts.ratings.directives', ['ngDialog']);

  angular
    .module('ts.ratings.services', []);
})();