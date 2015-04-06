(function(){

  angular
    .module('wildDonut')
    .controller('TeacherSettingsController', TeacherSettingsController);

  TeacherSettingsController.$inject = ['$scope', 'UserModifier'];

  function TeacherSettingsController($scope, UserModifier){
    $scope.updateTeacherSettings = function(){
      UserModifier.updateTeacherSettings($scope.user);
    }
  }

})();

