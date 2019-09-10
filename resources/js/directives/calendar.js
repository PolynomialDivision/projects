angular.module('coala')
    .directive('calendar', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/calendar.html',
            controller: function ($scope, $rootScope) {
                self = this

            },
            controllerAs: "gic"
        }
    }]);
