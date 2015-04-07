(function() {

  angular
    .module('wildDonut')
    .controller('StudentProfileController', StudentProfileController);

    StudentProfileController.$inject = ['$scope', 'UserData'];

    function StudentProfileController($scope, UserData) {
      UserData.getStudentData(username).then(function(student) {
        $scope.student = student.data;
      })
    }

})();