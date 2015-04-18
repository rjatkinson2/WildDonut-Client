(function() {

  angular
    .module('wildDonut')
    .controller('ProfileViewController', ProfileViewController);

    ProfileViewController.$inject = ['$scope', 'UserManager', 'State'];

    function ProfileViewController($scope, UserManager, State) {

      $scope.isTeacher = State.isTeacher;

      $scope.getProfileData = function() {
        UserManager.getProfileData().then(function(profile) {
          $scope.profile = profile.data;
        });
      };

      $scope.init = function() {
        $scope.getProfileData();
      };

      $scope.init();

    }

})();
