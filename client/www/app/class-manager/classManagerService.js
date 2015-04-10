(function(){

  angular
    .module('wildDonut')
    .factory('ClassManager', ClassManager);

  ClassManager.$inject = ['$http', 'State'];

  function ClassManager($http, State){

    var instance = {
      createClass: createClass,
      editClass: editClass,
      deleteClass: deleteClass,
      getAllTeacherClasses: getAllTeacherClasses,
      getBookedTeacherClasses: getBookedTeacherClasses,
      getAvailableTeacherClasses: getAvailableTeacherClasses,
      getClass: getClass,
      getBookedStudentClasses: getBookedStudentClasses,
      bookClass: bookClass
    };

    return instance;

    // implementation of functions
    function createClass(classInformation){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/' + State.username + '/teacher/classes',
        data: classInformation,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response;
      });
    }

    function editClass(classInformation, classId){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/' + State.username + '/teacher/classes/' + classId,
        data: classInformation,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response;
      });
    }

    function deleteClass(classId){
      return $http({
        method: 'DELETE',
        url: 'http://localhost:4568/api/users/' + State.username + '/teacher/classes/' + classId,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response;
      });
    }

    function getAllTeacherClasses(){
      return $http({
        method: 'GET',
        url: 'http://localhost:4568/api/users/' + State.username + '/teacher/classes',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response.data;
      });
    }

    function getBookedTeacherClasses(){
      return $http({
        method: 'GET',
        url: 'http://localhost:4568/api/users/' + State.username + '/teacher/classes/booked',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response.data;
      });
    }

    function getAvailableTeacherClasses(){
      return $http({
        method: 'GET',
        url: 'http://localhost:4568/api/users/' + State.username + '/teacher/classes/available',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response.data;
      });
    }

    function getClass(classId){
      return $http({
        method: 'GET',
        url: 'http://localhost:4568/api/users/' + State.username + '/teacher/classes/' + classId,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response.data;
      });
    }

    function getBookedStudentClasses(){
      return $http({
        method: 'GET',
        url: 'http://localhost:4568/api/users/' + State.username + '/student/classes/booked',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response.data;
      });
    }

    function bookClass(bookingDetails){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/' + State.username + '/student/classes/booked',
        data: bookingDetails,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        return response;
      });
    }

  }

})();
