(function(){

  angular
    .module('wildDonut')
    .controller('TeacherEditClassController', TeacherEditClassController);

  TeacherEditClassController.$inject = ['$scope', '$stateParams', '$state', 'ClassManager', 'State'];

  function TeacherEditClassController($scope, $stateParams, $state, ClassManager, State){

    $scope.class_id = $stateParams.id;

    $scope.getClass = function(){
      ClassManager.getClass($scope.class_id).then(function(classInfo){
        // Get the class object
        $scope.classInformation = classInfo;

        // Override the date, start and end time properties in the object with date format
        // This enables the form fields to populate correctly
        $scope.classInformation.date = new Date(classInfo.date);
        $scope.classInformation.start_time = new Date(classInfo.start_time);
        $scope.classInformation.end_time = new Date(classInfo.end_time);
      });
    };

    $scope.updateClass = function(){
      ClassManager.editClass($scope.classInformation, $scope.class_id).then(function(response){
        $state.go('manageClasses', {username: State.username}, {reload: true});
      });
    };

    $scope.init = function(){
      $scope.getClass();
    };

    $scope.init();

  }

})();
