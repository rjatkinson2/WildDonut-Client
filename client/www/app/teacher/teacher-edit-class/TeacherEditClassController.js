(function(){

  angular
    .module('wildDonut')
    .controller('TeacherEditClassController', TeacherEditClassController);

  TeacherEditClassController.$inject = ['$scope', '$stateParams', '$state', 'ClassManager', 'State'];

  function TeacherEditClassController($scope, $stateParams, $state, ClassManager, State){

    $scope.class_id = $stateParams.id;

    $scope.setDate = function() {
      var timeOptions = {
        date: new Date(),
        mode: 'date',
        allowOldDates: false,
        allowFutureDates: true
      };
      window.datePicker.show(timeOptions, function(date){
      });
    };

    $scope.setTime = function() {
      var timeOptions = {
        date: new Date(),
        mode: 'time'
      };
      window.datePicker.show(timeOptions, function(date){
      });
    };

    $scope.getClass = function(){
      ClassManager.getClass($scope.class_id).then(function(classInfo){
        $scope.classInformation = classInfo;
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
