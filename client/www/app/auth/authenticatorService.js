(function(){

  angular
    .module('wildDonut')
    .factory('Authenticator', Authenticator);

  Authenticator.$inject = ['$http', 'State'];

  function Authenticator($http, State){

    var instance = {
      login: login,
      signup: signup
    };

    return instance;

    // implementation of functions
    function login(user){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/login',
        data: user,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        State.username = response.data.username;
        State.user_id = response.data._id;
        State.isTeacher = response.data.teacher;
        return response;
      });
    }

    function signup(user){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/signup',
        data: user,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        State.username = response.data.username;
        State.user_id = response.data._id;
        State.isTeacher = response.data.teacher;
        return response;
      });
    }
  }

})();
