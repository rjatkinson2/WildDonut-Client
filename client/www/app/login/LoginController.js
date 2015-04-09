(function(){

  angular
    .module('wildDonut')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', 'Authenticator'];

  function LoginController($scope, $location, Authenticator){

    //defers to the Authenticator factory to handle
    //interaction with server and signIn process
    $scope.login = function(){
      Authenticator.login($scope.user).then(function(response){
        //redirects you to home page if successful login
        $location.path('/');
      }).catch(function(error){
        console.log(error);
      });
    };
  }

})();
