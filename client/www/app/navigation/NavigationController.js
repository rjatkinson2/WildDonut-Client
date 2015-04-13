(function(){

  angular
    .module('wildDonut')
    .controller('NavigationController', NavigationController);

  NavigationController.$inject = ['$scope', '$location', 'State'];

  function NavigationController($scope, $location, State){

    $scope.browse = function(){
      $location.path('/browse');
    };

    $scope.login = function(){
      console.log('hii');
      $location.path('/login');
    };

    $scope.signup = function(){
      $location.path('/signup');
    };

    $scope.userProfile = function(){
      $location.path('/'+ State.username +'/profile');
    };

    $scope.userProfileSettings = function(){
      $location.path('/'+ State.username +'/profile/settings');
    };

    $scope.manageTeacherClasses = function(){
      $location.path('/'+ State.username +'/teacher/classes/manage');
    };

    $scope.bookedClasses = function(){
      $location.path('/' + State.username + '/teacher/classes/booked');
    };

    $scope.createClass = function(){
      $location.path('/' + State.username + '/teacher/classes/new');
    };

    $scope.viewClass = function(classID){
      $location.path('/' + State.username + '/teacher/classes/' + classID);
    };

    $scope.editClass = function(classID){
      $location.path('/' + State.username + '/teacher/classes/' + classID + '/edit');
    };

    $scope.manageStudentClasses = function(){
      $location.path('/' + State.username + '/student/classes/manage');
    };

    $scope.pay = function(){
      $location.path('/pay');
    };
  }

})();
