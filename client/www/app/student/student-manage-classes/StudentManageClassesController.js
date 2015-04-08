(function() {

  angular
    .module('wildDonut')
    .controller('StudentManageClassesController', StudentManageClassesController);

    StudentManageClassesController.$inject = ['$scope', 'ClassManager'];

    function StudentManageClassesController($scope, ClassManager) {
      ClassManager.getBookedStudentClasses().then(function(classes) {
        $scope.classes = classes.data;
      });
    }

})();