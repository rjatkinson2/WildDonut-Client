(function(){

  angular
    .module('wildDonut')
    .controller('ViewClassController', ViewClassController);

  ViewClassController.$inject = ['$scope', '$stateParams', '$location', 'ClassManager', 'ReviewManager', 'UserManager', 'State'];

  function ViewClassController($scope, $stateParams, $location, ClassManager, ReviewManager, UserManager, State){
    $scope.class_id = $stateParams.id;
    $scope.teacher_username = $stateParams.username;
    $scope.classes = [];
    console.log($location.path());

    $scope.getAvailableTeacherClasses = function(){
      ClassManager.getAvailableTeacherClasses($scope.teacher_username).then(function(classes){
        console.log("classInfo", classes);
        // $scope.classInformation = classInfo;
        $scope.classes = classes;
      });
      UserManager.getProfileData($scope.teacher_username).then(function(response){
        console.log(response.data);
        $scope.teacher = response.data;
      })
    };

    $scope.getStarsLength = function(num){
      return new Array(num);
    };
    $scope.bookAndPay = function(class_id){
      console.log("id", class_id);
      // $scope.classInformation.student_id = State.user_id;
      // $scope.classInformation.class_id = $scope.classInformation._id;

      $location.path('/'+ $scope.teacher_username + '/teacher/classes/'+class_id+'/pay');
    };

    $scope.init = function(){
      $scope.getAvailableTeacherClasses();
    };

    $scope.init();
  }

})();
