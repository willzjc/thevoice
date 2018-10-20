/**
 * PostDetailController
 * @namespace ts.post_details.controllers
 */
(function () {
    'use strict';

    angular
        .module('ts.post_details.controllers')
        .controller('PostDetailController', PostDetailController);

    PostDetailController.$inject = ['$location', '$routeParams', 'Posts', 'PostDetail', 'Snackbar'];

    /**
     * @namespace PostDetailController
     */
    function PostDetailController($location, $routeParams, Posts, PostDetail, Snackbar) {
        var vm = this;

        vm.post_detail = undefined;
        vm.posts = [];

        activate();

        /**
         * @name activate
         * @desc Actions to be performed when this controller is instantiated
         * @memberOf ts.post_details.controllers.PostDetailController
         */
        function activate() {
            var post_id = $routeParams.post_id;
            var post_details = [];

            PostDetail.get(post_id).then(postDetailSuccessFn, postDetailErrorFn);

            // Posts.get(post_id).then(postsSuccessFn, postsErrorFn);

            PostDetail.getRelated(post_id).then(postsSuccessFn, postsErrorFn);

            /**
             * @name profileSuccessProfile
             * @desc Update `profile` on viewmodel
             */
            function postDetailSuccessFn(data, status, headers, config) {
                vm.post_detail = data.data;
            }


            /**
             * @name profileErrorFn
             * @desc Redirect to index and show error Snackbar
             */
            function postDetailErrorFn(data, status, headers, config) {
                $location.url('/');
                Snackbar.error('That entry does not exist.');
            }


            /**
             * @name postsSucessFn
             * @desc Update `posts` on viewmodel
             */
            function postsSuccessFn(data, status, headers, config) {
                vm.post_detail = data.data;
            }


            /**
             * @name postsErrorFn
             * @desc Show error snackbar
             */
            function postsErrorFn(data, status, headers, config) {
                Snackbar.error(data.data.error);
            }
        }
    }
})();
