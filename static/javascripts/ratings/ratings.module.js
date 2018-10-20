(function () {
  'use strict';

  angular
    .module('ts.posts', [
      'ts.posts.controllers',
      'ts.posts.directives',
      'ts.posts.services'
    ]);

  angular
    .module('ts.posts.controllers', []);

  angular
    .module('ts.posts.directives', ['ngDialog']);

  angular
    .module('ts.posts.services', []);
})();