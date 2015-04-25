(function(){

  angular
    .module('wildDonut')
    .controller('TeacherBookedClassesController', TeacherBookedClassesController);

  TeacherBookedClassesController.$inject = ['$scope', '$state', 'ClassManager', 'State'];

  function TeacherBookedClassesController($scope, $state, ClassManager, State){

    $scope.refreshClasses = function(){
      ClassManager.getBookedTeacherClasses().then(function(classes){
        $scope.bookedClasses = classes;
      });
    };

    $scope.studentToggleRoute = function() {
      $state.go('studentSchedule', {username: State.username}, {reload: true});
    };

    $scope.teacherToggleRoute = function() {
      $state.go('teacherSchedule', {username: State.username}, {reload: true});
    };

    $scope.init = function(){
      $scope.refreshClasses();
    };

    $scope.init();

  }

})();
