(function() {

  angular
    .module('wildDonut')
    .controller('BrowseController', BrowseController);

    BrowseController.$inject = ['$scope', '$location', 'CollectionManager', 'ReviewManager'];

    function BrowseController($scope, $location, CollectionManager, ReviewManager) {
      $scope.stars = {};

      $scope.getAvailableClasses = function() {
        CollectionManager.getAvailableClasses().then(function(classes) {
          $scope.classes = classes;
          $scope.classes.forEach(function(classInformation){
            classInformation.stars = ReviewManager.getStars(classInformation.avg_rating);
          });
        });
      };

      $scope.viewClass = function(classInformation) {
        $location.path('/' + classInformation.teacher.username + '/teacher/classes/' + classInformation._id);
      };

      $scope.getStarsLength = function(num){
        return new Array(num);
      };

      $scope.init = function() {
        $scope.getAvailableClasses();
      };

      $scope.init();
    }

})();
