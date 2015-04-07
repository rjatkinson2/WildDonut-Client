(function(){

  angular
    .module('wildDonut')
    .factory('Auth', Auth);

  Auth.$inject = ['$http', 'State'];

  function Auth($http, State){

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
        State.user = response.data.user.username
        return response;
      });
    }

    function signup(user){
      return $http.post({
        method: 'POST',
        url: 'NEED TO FILL OUT',
        data: user
      }).then(function(response){
        State.user = response.data.user.username
        return response;
      });
    }
  }
})();