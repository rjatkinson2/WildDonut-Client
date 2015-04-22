(function(){

  angular
    .module('wildDonut')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', '$state', 'ImageManager', 'Authenticator', 'Facebook'];

  function LoginController($scope, $location, $state, ImageManager, Authenticator){
    // initialize empty user
    $scope.user = {};

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

    $scope.facebookLogin = function(){
      Authenticator.facebookLogin(function(response){
        $location.path('/');
        console.log(response);
      });
    };

    $scope.pickPic = function(){
      window.imagePicker.getPictures(
        function(image) {
          alert('results are the following: ' + image);
          ImageManager.postSelectedImage(image);
        }, function (error) {
          console.log('Error: ' + error);
        }, {
          maximumImagesCount: 1
        }
      );
    };
  }

})();
