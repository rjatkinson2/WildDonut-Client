(function() {

  angular
    .module('wildDonut')
    .controller('ProfileSettingsController', ProfileSettingsController);

    ProfileSettingsController.$inject = ['$scope', 'UserManager', 'State'];

    function ProfileSettingsController($scope, UserManager, State) {
      $scope.isTeacher = State.isTeacher;
      
      UserManager.saveProfileData($scope.profile).then(function(response) {
        console.log(response);
      });
    }

})();