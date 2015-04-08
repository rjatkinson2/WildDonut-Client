(function(){

  angular
    .module('wildDonut')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', '$location', 'Auth'];

  function SignupController($scope, $location, Auth){

    //defers to the Auth factory to handle
    //interaction with server and signUp process
    $scope.signup = function(){
      Auth.signup($scope.user).then(function(response){
        console.log('Successful', response);
        //redirects you to home page if successful login
        $location.path('/');
      }).catch(function(error){
        console.log(error);
      });
    };
  }

})();