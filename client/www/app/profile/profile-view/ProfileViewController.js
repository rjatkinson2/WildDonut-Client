(function() {

  angular
    .module('wildDonut')
    .controller('ProfileViewController', ProfileViewController);

    ProfileViewController.$inject = ['$scope', 'UserManager', 'State'];

    function ProfileViewController($scope, UserManager, State) {
      $scope.isTeacher = State.isTeacher;
      
      UserManager.getProfileData().then(function(profile) {
        $scope.profile = profile.data;
      });
    }

})();