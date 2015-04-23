(function(){

  angular
    .module('wildDonut')
    .controller('TeacherManageClassesController', TeacherManageClassesController);

  TeacherManageClassesController.$inject = ['$scope', '$location', '$state', 'ClassManager', 'State'];

  function TeacherManageClassesController($scope, $location, $state, ClassManager, State){

    $scope.getAllClasses = function(){
      ClassManager.getAllTeacherClasses().then(function(classes){
        $scope.allClasses = classes;
      });
    };

    $scope.addClass = function(){
      $location.url('/' + State.username + '/teacher/classes/new');
    };

    $scope.editClass = function(class_id){
      $location.url('/' + State.username + '/teacher/classes/' + class_id + '/edit');
    };

    $scope.deleteClass = function(class_id){
      ClassManager.deleteClass(class_id).then(function() {
        $state.go('manageClasses', {username: State.username}, {reload: true});
      });
    };

    $scope.viewClass = function(classInstance) {
      $state.go('viewClass', {id: classInstance._id});
    };

    $scope.studentToggleRoute = function() {
      $state.go('studentSchedule', {username: State.username}, {reload: true});
    };

    $scope.teacherToggleRoute = function() {
      $state.go('manageClasses', {username: State.username}, {reload: true});
    };

    $scope.init = function(){
      $scope.getAllClasses();
      $scope.listCanSwipe = true;
    };

    $scope.init();

  }

})();
