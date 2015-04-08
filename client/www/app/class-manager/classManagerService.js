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
      signUpForClass: signUpForClass
    };

    return instance;

    // sets the full URL for methods
    var hostUrl = process.env.HOST_URL || 'localhost:4568'

    // implementation of functions
    function createClass(classInformation){
      return $http({
        method: 'POST',
        url: hostUrl + '/api/users/' + State.username + '/teacher/classes/',
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
        url: hostUrl + '/api/users/' + State.username + '/teacher/classes/' + classId,
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
        url: hostUrl + '/api/users/' + State.username + '/teacher/classes/' + classId,
        data: classId,
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
        url: hostUrl + '/api/users/' + State.username + '/teacher/classes/',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(data){
        return data;
      });
    }

    function getBookedTeacherClasses(){
      return $http({
        method: 'GET',
        url: hostUrl + '/api/users/' + State.username + '/teacher/classes/booked',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(data){
        return data;
      });
    }

    function getAvailableTeacherClasses(){
      return $http({
        method: 'GET',
        url: hostUrl + '/api/users/' + State.username + '/teacher/classes/available',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(data){
        return data;
      });
    }

    function getClass(classId){
      return $http({
        method: 'GET',
        url: hostUrl + '/api/users/' + State.username + '/teacher/classes/booked' + classId,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(data){
        return data;
      });
    }

    function getBookedStudentClasses(){
      return $http({
        method: 'GET',
        url: hostUrl + '/api/users/' + State.username + '/student/classes/booked',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(data){
        return data;
      });
    }

    function signUpForClass(bookingDetails){
      return $http({
        method: 'POST',
        url: hostUrl + '/api/users/' + State.username + '/student/classes/booked',
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
