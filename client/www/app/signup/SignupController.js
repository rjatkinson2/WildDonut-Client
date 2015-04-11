(function(){

  angular
    .module('wildDonut')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', '$location', 'Authenticator'];

  function SignupController($scope, $location, Authenticator){
    // initialize empty user
    $scope.user = {};
    
    //defers to the Authenticator factory to handle
    //interaction with server and signUp process
    $scope.signup = function(){
      Authenticator.signup($scope.user).then(function(response){
        $location.path('/');
      }).catch(function(error){
        console.log(error);
      });
    };
  }

})();
