(function() {

  angular
    .module('wildDonut')
    .controller('StudentManageScheduleController', StudentManageScheduleController);

    StudentManageScheduleController.$inject = ['$scope', '$location', 'ClassManager', 'ReviewManager'];

    function StudentManageScheduleController($scope, $location, ClassManager, ReviewManager) {

      $scope.getBookedStudentClasses = function() {
        ClassManager.getBookedStudentClasses().then(function(classes) {
          $scope.classes = classes;
          $scope.classes.forEach(function(classInformation){
            classInformation.stars = ReviewManager.getStars(classInformation.avg_rating);
            classInformation.reviewable = Date.parse(classInformation.start_time) < new Date();
          });
        });
      };

      $scope.review = function(classDetails) {
        console.log(classDetails);
        $location.path('/'+ classDetails.teacher.username +'/teacher/classes/' + classDetails._id + '/review');
      };

      $scope.getStarsLength = function(num){
        return new Array(num);
      };

      $scope.init = function() {
        $scope.getBookedStudentClasses();
      };

      $scope.init();

    }

})();
