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
    $scope.bookAndPay = function(class_id){
      console.log("id", class_id);
      $location.path('/'+ $scope.teacher_username + '/teacher/classes/'+class_id+'/pay');
    };

    $scope.init = function(){
      $scope.getClass();
    };

    $scope.init();
  }

})();
