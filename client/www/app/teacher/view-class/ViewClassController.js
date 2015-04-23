(function(){

  angular
    .module('wildDonut')
    .controller('ViewClassController', ViewClassController);

  ViewClassController.$inject = ['$scope', '$stateParams', '$location', 'ClassManager', 'ReviewManager', 'UserManager', 'State'];

  function ViewClassController($scope, $stateParams, $location, ClassManager, ReviewManager, UserManager, State){
    $scope.class_id = $stateParams.id;
    $scope.teacher_username = $stateParams.username;
    $scope.classes = [];

    $scope.getClass = function(){
      ClassManager.getClass($scope.class_id).then(function(classInfo){
        $scope.classInformation = classInfo;
        $scope.classInformation.stars = ReviewManager.getStars(classInfo.avg_rating);
      });
    };

    $scope.getStarsLength = function(num){
      return new Array(num);
    };
    $scope.bookAndPay = function(){
      $location.path('/' + $scope.teacher_username + '/teacher/classes/' + $scope.class_id + '/pay');
    };

    $scope.init = function(){
      $scope.getClass();
    };

    $scope.init();
  }

})();
