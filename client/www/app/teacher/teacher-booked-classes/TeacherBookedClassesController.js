(function(){

  angular
    .module('wildDonut')
    .controller('TeacherBookedClassesController', TeacherBookedClassesController);

  TeacherBookedClassesController.$inject = ['$scope', 'ClassManager'];

  function TeacherBookedClassesController($scope, ClassManager){

    $scope.refreshClasses = function(){
      ClassManager.getBookedTeacherClasses().then(function(classes){
        $scope.bookedClasses = classes;
      });
    };

    $scope.init = function(){
      $scope.refreshClasses();
    };

    $scope.init();

  }

})();
