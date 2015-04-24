(function(){

  angular
    .module('wildDonut')
    .controller('TeacherCreateClassController', TeacherCreateClassController);

  TeacherCreateClassController.$inject = ['$scope', '$state', 'ImageManager', 'ClassManager', 'State'];

  function TeacherCreateClassController($scope, $state, ImageManager, ClassManager, State){
    $scope.classInformation = {};

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

    $scope.createClass = function(){
      ClassManager.createClass($scope.classInformation).then(function() {
        $state.go('manageClasses', {username: State.username}, {reload: true});
      });
    };

    $scope.upload = function (files) {
      ImageManager.postSelectedImage(files, $scope.classInformation.name, 'class', function(url){
        $scope.classInformation.picture_url = url;
      });
    };
  }

})();
