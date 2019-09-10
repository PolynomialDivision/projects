angular.module('coala')
    .directive('calenda', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/calenda.html',
            controller: function ($scope, $rootScope) {
                self = this

            },
            controllerAs: "gic"
        }
    }]);
