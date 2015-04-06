(function() {

  angular
    .module('wildDonut')
    .factory('UserData', UserData);

    UserData.$inject = ['$http'];

    function UserData() {

      var instance = {
        getTeacherData: getTeacherData,
        getStudentData: getStudentData
      };

      return instance;

      // implementation of functions
      function getTeacherData(username) {
        return $http({
          method: 'GET',
          url: '/api/teacher/:username',
          params: {username: username}
        }).then(function(data) {
          return data;
        });
      }

      function getAllTeachers() {
        return $http({
          method: 'GET',
          url: '/api/users/teachers',
        }).then(function(data) {
          return data;
        });
      }

      function getStudentData(username) {
        return $http({
          method: 'GET',
          url: '/api/student/:username',
          params: {username: username}
        }).then(function(data) {
          return data;
        });
      }

    }

})();