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
        $scope.getAllClasses();
      });
    };

    $scope.viewClass = function(classInstance) {
      $state.go('viewClass', {id: classInstance._id});
    };

    $scope.init = function(){
      $scope.getAllClasses();
      $scope.listCanSwipe = true;
    };

    $scope.init();

  }

})();
