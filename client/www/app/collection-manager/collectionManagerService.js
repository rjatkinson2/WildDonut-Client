(function() {

  angular
    .module('wildDonut')
    .factory('CollectionManager', CollectionManager);

    CollectionManager.$inject = ['$http'];

    function CollectionManager($http) {

      var instance = {
        getAvailableClasses: getAvailableClasses
      };

      return instance;

      // sets the full URL for methods
      var hostUrl = process.env.HOST_URL || 'localhost:4568';

      // implementation of functions
      function getAvailableClasses() {
        return $http({
          method: 'GET',
          url: '/api/classes',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function(data) {
          return data;
        });
      }

    }

})();