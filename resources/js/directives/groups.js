angular.module('coala')
    .directive('groups', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/groups.html',
            controller: function ($scope, $rootScope) {
                self = this
                self.groupsList = {}
                self.adminsList = {}

                $http.get('data/projects.liquid')
                    .then(function (res) {
                        $scope.projects = res.data
                        angular.forEach($scope.projects, function (value, key) {
                            angular.forEach(value.groups, function (value, key) {
                                self.groupsList[value] = {
                                    "github_handle": selfgroupWebsiteDict[value],
                                }
                            });
                        });
                    })



            },
            controllerAs: "gic"
        }
    }]);
