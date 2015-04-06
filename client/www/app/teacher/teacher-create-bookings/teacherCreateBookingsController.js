(function(){

  angular
    .module('wildDonut')
    .controller('TeacherCreateBookingsController', TeacherCreateBookingsController);

  TeacherCreateBookingsController.$inject = ['$scope', 'BookingHandler'];

  function TeacherCreateBookingsController($scope, BookingHandler){
    $scope.createBooking = function(){
      BookingHandler.createBooking($scope.booking);
    };
  }

})();
