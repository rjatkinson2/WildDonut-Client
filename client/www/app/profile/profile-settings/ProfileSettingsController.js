(function() {

  angular
    .module('wildDonut')
    .controller('ProfileSettingsController', ProfileSettingsController);

    ProfileSettingsController.$inject = ['$scope', 'UserManager', 'State'];

    function ProfileSettingsController($scope, UserManager, State) {

      $scope.isTeacher = State.isTeacher;

      $scope.saveSettings = function(){
        UserManager.saveProfileData($scope.profile).then(function(response) {
          console.log(response);
        });
      };

    }

})();