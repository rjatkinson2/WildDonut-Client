(function() {

  angular
    .module('wildDonut')
    .controller('StudentManageClassesController', StudentManageClassesController);

    StudentManageClassesController.$inject = ['$scope', 'ClassManager'];

    function StudentManageClassesController($scope, ClassManager) {

      $scope.getBookedStudentClasses = function() {
        ClassManager.getBookedStudentClasses().then(function(classes) {
          $scope.classes = classes;
        });
      }

      $scope.init = function() {
        $scope.getBookedStudentClasses();
      };

      $scope.init();

    }

})();
