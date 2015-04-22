(function(){

  angular
    .module('wildDonut')
    .controller('ViewClassController', ViewClassController);

  ViewClassController.$inject = ['$scope', '$stateParams', '$location', 'ClassManager', 'ReviewManager', 'State'];

  function ViewClassController($scope, $stateParams, $location, ClassManager, ReviewManager, State){
    $scope.class_id = $stateParams.id;
    console.log($location.path());

    $scope.getClass = function(){
      ClassManager.getClass($scope.class_id).then(function(classInfo){
        $scope.classInformation = classInfo;
        $scope.classInformation.stars = ReviewManager.getStars(classInfo.avg_rating);
      });
    };

    $scope.bookClass = function(){
      $scope.classInformation.student_id = State.user_id;
      $scope.classInformation.class_id = $scope.classInformation._id;

      ClassManager.bookClass($scope.classInformation).then(function(response){
        $location.path('/' + $scope.classInformation.student_id + '/student/schedule/manage');
      });
    };

    $scope.getStarsLength = function(num){
      return new Array(num);
    };
    $scope.bookAndPay = function(){
      $scope.classInformation.student_id = State.user_id;
      $scope.classInformation.class_id = $scope.classInformation._id;

      $location.path('/' + 'pay');
    };

    $scope.init = function(){
      $scope.getClass();
    };

    $scope.init();
  }

})();
