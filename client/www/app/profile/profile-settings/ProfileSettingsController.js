(function() {

  angular
    .module('wildDonut')
    .controller('ProfileSettingsController', ProfileSettingsController);

  ProfileSettingsController.$inject = ['$scope', 'UserManager', 'ImageManager', 'State'];

  function ProfileSettingsController($scope, UserManager, ImageManager, State) {
    $scope.profile = {};
    $scope.isTeacher = State.isTeacher;

    $scope.saveSettings = function(){
      UserManager.saveProfileData($scope.profile).then(function(response) {
        console.log(response);
      });
    };

    $scope.upload = function (files) {
      ImageManager.postSelectedImage(files, State.username, 'user', function(url){
        $scope.profile.picture_url = url;
      });
    };

    $scope.init = function(){
      $scope.profile.picture_url = State.picture_url;
      $scope.profile = State;
    };

    $scope.init();

  }

})();