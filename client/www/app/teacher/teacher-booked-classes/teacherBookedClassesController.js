(function(){

  angular
    .module('wildDonut')
    .controller('TeacherBookedClassesController', TeacherBookedClassesController);

  TeacherBookedClassesController.$inject = ['$scope', 'ClassManager'];

  function TeacherBookedClassesController($scope, ClassManager){

    $scope.refreshClasses = function(){
      ClassManager.getBookedTeacherClasses().then(function(response){
        $scope.apply(function(){
          $scope.bookedClasses = response.data.bookedClasses;
        });
      });
    };

    $scope.init = function(){
      $scope.refreshClasses();
    };

    $scope.init();

  }

})();
