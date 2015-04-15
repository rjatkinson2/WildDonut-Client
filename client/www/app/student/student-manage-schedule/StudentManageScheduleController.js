(function() {

  angular
    .module('wildDonut')
    .controller('StudentManageScheduleController', StudentManageScheduleController);

    StudentManageScheduleController.$inject = ['$scope', '$location', 'ClassManager'];

    function StudentManageScheduleController($scope, $location, ClassManager) {

      $scope.getBookedStudentClasses = function() {
        ClassManager.getBookedStudentClasses().then(function(classes) {
          $scope.classes = classes;
        });
      };

      $scope.review = function(classDetails) {
        console.log(classDetails);
        $location.path('/'+ classDetails.teacher.username +'/teacher/classes/' + classDetails._id + '/review');
      };

      $scope.init = function() {
        $scope.getBookedStudentClasses();
      };

      $scope.init();

    }

})();
