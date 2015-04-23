(function(){

  angular
    .module('wildDonut')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', '$state', '$upload', 'ImageManager', 'Authenticator', 'Facebook'];

  function LoginController($scope, $location, $state, $upload, ImageManager, Authenticator){
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

    $scope.$watch('files', function () {
      $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
      alert(files);
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          $upload.upload({
              url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
              fields: {
                  'username': $scope.username
              },
              file: file
          }).progress(function (evt) {
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
          }).success(function (data, status, headers, config) {
              console.log('file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data));
          });
        }
      }
    };

    // $scope.$watch('files', function () {
    //   console.log('watch has fired');
    //   console.log($scope.files);
    //   $scope.upload($scope.files);
    // });

    // $scope.upload = function(files){
    //   console.log('upload has fired');
    //   console.log(files);
    // };

    // $scope.pickPic = function(){
    //   window.imagePicker.getPictures(
    //     function(image) {
    //       alert('results are the following: ' + image);
    //       ImageManager.postSelectedImage(image);
    //     }, function (error) {
    //       console.log('Error: ' + error);
    //     }, {
    //       maximumImagesCount: 1
    //     }
    //   );
    // };
  }

})();
