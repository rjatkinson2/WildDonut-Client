(function() {

  angular
    .module('wildDonut')
    .factory('ImageManager', ImageManager);

    ImageManager.$inject = ['$http'];

    function ImageManager($http) {

      var instance = {
        postSelectedImage: postSelectedImage
      };

      return instance;

      // implementation of functions
      function postSelectedImage(image) {
        // !! Assumes variable image is a valid URL to a text file on the device,
        //    for example, cdvfile://localhost/persistent/path/to/file.txt
        var success = function (r) {
            // alert("Code = " + r.responseCode);
            alert("Response = " + r.response);
            alert("Headers = " + r.headers);
            // alert("Sent = " + r.bytesSent);
        };

        var failure = function (error) {
            alert("An error has occurred: Code = " + error.code);
            alert("upload error source " + error.source);
            alert("upload error target " + error.target);
        };

        var uri = encodeURI("http://localhost:4568/api/images/user/s3upload");
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = "newImage.jpg";
        options.mimeType = "image/jpeg";
        // options.params = {};
        // options.params.value1 = "test";
        // options.params.value2 = "param";
        var ft = new FileTransfer();
        ft.upload(image, uri, success, failure, options);
      }

    }

})();
