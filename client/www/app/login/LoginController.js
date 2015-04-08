(function(){

  angular
    .module('wildDonut')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', 'Auth'];

  function LoginController($scope, $location, Auth){

    //defers to the Auth factory to handle
    //interaction with server and signIn process
    $scope.login = function(){
      Auth.login($scope.user).then(function(response){
        console.log('Successful', response);
        //redirects you to home page if successful login
        $location.path('/');
      }).catch(function(error){
        console.log(error);
      });
    };
  }

})();
