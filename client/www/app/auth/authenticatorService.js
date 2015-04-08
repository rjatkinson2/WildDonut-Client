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

    //////////////////////////
    //////IMPLEMENTATION//////
    //////////////////////////

    var hostUrl = process.env.HOST_URL || 'localhost:4568'

    function login(user){
      return $http({
        method: 'POST',
        url: hostUrl + '/api/users/login',
        data: user,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        State.username = response.data.user.username
        State.isTeacher = response.data.user.teacher
        return response;
      });
    }

    function signup(user){
      return $http({
        method: 'POST',
        url: hostUrl + ' /api/users/signup',
        data: user,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        State.username = response.data.user.username
        State.isTeacher = response.data.user.teacher
        return response;
      });
    }
  }

})();