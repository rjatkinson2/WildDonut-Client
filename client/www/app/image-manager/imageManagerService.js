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
      function postSelectedImage(image) {
        var uploadUrl = "http://localhost:4568/api/images/user/s3upload";
        var fd = new FormData();
        fd.append('file1', image);
        fd.append('userName', 'Joey');
        alert('down here now');
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(test){
          alert(test);
          alert('success');
        })
        .error(function(test2){
          alert(test2);
          alert('error');
        });

        // $upload.upload({
        //   url: 'http://localhost:4568/api/images/user/s3upload',
        //   fields: {
        //       'userName': 'ryan'
        //   },
        //   file: image
        // })
        // .progress(function (evt) {
        //   var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //   alert('progress: ' + progressPercentage + '% ' + evt.config.file.name);
        // })
        // .success(function (data, status, headers, config) {
        //   alert('file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data));
        // });
      }

    }

})();
