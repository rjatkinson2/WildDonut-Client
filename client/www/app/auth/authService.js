(function(){

  angular
    .module('wildDonut')
    .factory('Auth', Auth);

  Auth.$inject = ['$http'];

  function Auth($http){

    var instance = {
      login: login,
      signup: signup
    };

    return instance;

    //////////////////////////
    //////IMPLEMENTATION//////
    //////////////////////////

    function login(user){
      return $http.post({
        method: 'POST',
        url: 'NEED TO FILL OUT',
        data: user
      }).then(function(response){
        return response;
      });
    }

    function signup(user){
      return $http.post({
        method: 'POST',
        url: 'NEED TO FILL OUT',
        data: user
      }).then(function(response){
        return response;
      });
    }
  }
})();