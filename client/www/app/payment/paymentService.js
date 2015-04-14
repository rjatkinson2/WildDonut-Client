(function(){

  angular
    .module('wildDonut')
    .factory('Payments', Payments);

  Payments.$inject = ['$http', 'State'];

  function Payments($http, State){

    var instance = {
      generate: generate,
      transfer: transfer
    };

    return instance;

    // implementation of functions
    function generate(token){
      console.log(token);
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/payments/charges',
        data: token,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        return response;
      });
    }

    function transfer(token){
      console.log(token);
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/payments/transfers',
        data: token,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        return response;
      });
    }
  }
})();
