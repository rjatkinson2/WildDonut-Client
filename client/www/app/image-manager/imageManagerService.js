(function() {

  angular
    .module('wildDonut')
    .factory('ImageManager', ImageManager);

    ImageManager.$inject = ['$http', '$upload'];

    function ImageManager($http, $upload) {

      var instance = {
        postSelectedImage: postSelectedImage
      };

      return instance;

      // implementation of functions
      function postSelectedImage(files) {
        if (files && files.length) {
          var file = files[0];
          var fields = { 'userName': 'madeline' };
          var url = 'http://localhost:4568/api/images/user/s3upload';
          $upload.upload({ url: url, fields: fields, file: file })
          .progress(function (evt) {
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
          })
          .success(function (data, status, headers, config) {
              alert('file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data));
          });
        }
      }
    }
})();
