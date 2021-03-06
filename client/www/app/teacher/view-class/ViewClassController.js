(function(){

  angular
    .module('wildDonut')
    .controller('ViewClassController', ViewClassController);

  ViewClassController.$inject = ['$scope', '$stateParams', '$location', 'ClassManager', 'State'];

  function ViewClassController($scope, $stateParams, $location, ClassManager, State){
    $scope.class_id = $stateParams.id;
    console.log($location.path());

    $scope.getClass = function(){
      ClassManager.getClass($scope.class_id).then(function(classInfo){
        $scope.classInformation = classInfo;
      });
    };

    $scope.bookClass = function(){
      $scope.classInformation.student_id = State.user_id;
      $scope.classInformation.class_id = $scope.classInformation._id;

      ClassManager.bookClass($scope.classInformation).then(function(response){
        console.log(response);
        $location.path('/' + $scope.classInformation.student_id + '/student/schedule/manage');
      });
    };

    $scope.init = function(){
      $scope.getClass();
    };

    $scope.init();
  }

})();
