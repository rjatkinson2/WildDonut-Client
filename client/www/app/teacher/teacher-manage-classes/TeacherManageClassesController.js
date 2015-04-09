(function(){

  angular
    .module('wildDonut')
    .controller('TeacherManageClassesController', TeacherManageClassesController);

  TeacherManageClassesController.$inject = ['$scope', '$location', 'ClassManager', 'State'];

  function TeacherManageClassesController($scope, $location, ClassManager, State){

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
      ClassManager.deleteClass(class_id);
      $scope.getAllClasses();
    };

    $scope.init = function(){
      $scope.getAllClasses();
    };

    $scope.init();

  }

})();
