(function(){

  angular
    .module('wildDonut')
    .controller('TeacherCreateClassController', TeacherCreateClassController);

  TeacherCreateClassController.$inject = ['$scope', 'ClassManager'];

  function TeacherCreateClassController($scope, ClassManager){
    $scope.createClass = function(){
      ClassManager.createClass($scope.classInformation);
    };
  }

})();
