(function() {

  angular
    .module('wildDonut')
    .factory('UserManager', UserManager);

    UserManager.$inject = ['$http', 'State'];

    function UserManager($http, State) {

      var instance = {
        saveProfileData: saveProfileData,
        getProfileData: getProfileData
      };

      return instance;

      // sets the full URL for methods
      var hostUrl = process.env.HOST_URL || 'localhost:4568';

      // implementation of functions
      function saveProfileData(user) {
        return $http({
          method: 'POST',
          url: hostUrl + '/api/users/' + State.username,
          headers: {
            'Content-Type': 'application/json'
          },
          data: user
        }).then(function(response) {
          return response;
        });
      }

      function getProfileData() {
        return $http({
          method: 'GET',
          url: hostUrl + '/api/users/' + State.username,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function(data) {
          return data;
        });
      }

    }

})();
