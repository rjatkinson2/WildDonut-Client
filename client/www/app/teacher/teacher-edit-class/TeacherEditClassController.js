(function(){

  angular
    .module('wildDonut')
    .controller('TeacherEditClassController', TeacherEditClassController);

  TeacherEditClassController.$inject = ['$scope', '$stateParams', 'ClassManager'];

  function TeacherEditClassController($scope, $stateParams, ClassManager){

    $scope.class_id = $stateParams.id;

    $scope.getClass = function(){
      ClassManager.getClass($scope.class_id).then(function(classInfo){
        $scope.classInformation = classInfo;
      });
    };

    $scope.updateClass = function(){
      ClassManager.editClass($scope.classInformation, $scope.class_id).then(function(response){
        console.log(response);
      });
    };

    $scope.init = function(){
      $scope.getClass();
    };

    $scope.init();

  }

})();
