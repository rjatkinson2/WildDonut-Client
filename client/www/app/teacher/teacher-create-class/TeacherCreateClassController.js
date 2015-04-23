(function(){

  angular
    .module('wildDonut')
    .controller('TeacherCreateClassController', TeacherCreateClassController);

  TeacherCreateClassController.$inject = ['$scope', '$state', 'ClassManager', 'State'];

  function TeacherCreateClassController($scope, $state, ClassManager, State){
    $scope.classInformation = {};

    $scope.createClass = function(){
      ClassManager.createClass($scope.classInformation).then(function() {
        $state.go('manageClasses', {username: State.username}, {reload: true});
      });
    };
  }

})();
