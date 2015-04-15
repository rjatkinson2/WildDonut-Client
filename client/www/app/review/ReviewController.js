(function(){
  angular
    .module('wildDonut')
    .controller('ReviewController', ReviewController);

  ReviewController.$inject = ['$scope', '$location', '$stateParams', 'ClassManager'];

  function ReviewController($scope, $location, $stateParams, ClassManager){
    $scope.classInfo = {};

    $scope.review = {};
    $scope.review.class_id = $stateParams.id;
    $scope.review.teacher = $stateParams.username;
    $scope.review.message = null;

    $scope.submitReview = function(){
      console.log('pre-submit');
      console.log($scope.review);
      ClassManager.submitReview($scope.review).then(function(response){
        console.log('after-the-submit');
        console.log(response);
      });
    };

    $scope.init = function(){
      $scope.review.rate = 3;
      $scope.review.max = 5;
      
      ClassManager.getClass($scope.review.class_id).then(function(classInfo){
        $scope.classInfo.className = classInfo.name;
        $scope.classInfo.classStart = classInfo.start_time;
      });
    };

    $scope.init();

  }
})();