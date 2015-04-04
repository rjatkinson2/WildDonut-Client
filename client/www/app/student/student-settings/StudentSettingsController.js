(function() {

  angular
    .module('wildDonut')
    .controller('StudentSettingsController', StudentSettingsController);

    StudentSettingsController.$inject = ['$scope', 'UserModifier'];

    function StudentSettingsController($scope, UserModifier) {
      $scope.saveUserData = function() {
        UserModifier.updateUser($scope.user);
        console.log($scope.user);
      };
    }

})();