var app = angular.module('formValid', []);

app.controller('formController', ['$scope', function($scope) {
    $scope.submit = function() {
        $scope.message = 'Welcome ' + $scope.user.firstname + ' ' + $scope.user.lastname;
    };
}]);