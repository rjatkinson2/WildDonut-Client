(function() {

  angular
    .module('wildDonut')
    .factory('UserModifier', UserModifier);

    UserModifier.$inject = ['$http'];

    function UserModifier($http) {

      var instance = {
        updateUser: updateUser
      };

      return instance;

      // implementation of functions
      function updateUser(user) {
        return $http({
          method: 'POST',
          url: '/api/users/:username',
          data: user
        }).then(function(response) {
          return response;
        });
      }

    }

})();