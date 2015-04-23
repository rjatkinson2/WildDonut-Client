(function() {

  angular
    .module('wildDonut')
    .controller('BrowseController', BrowseController);

    BrowseController.$inject = ['$scope', '$location', 'CollectionManager', 'ReviewManager', 'State'];

    function BrowseController($scope, $location, CollectionManager, ReviewManager, State) {
      $scope.stars = {};

      $scope.getAvailableClasses = function() {
        CollectionManager.getAvailableClasses().then(function(classes) {
          $scope.classes = classes;
          $scope.classes.forEach(function(classInstance){
            classInstance.stars = ReviewManager.getStars(classInstance.avg_rating);
          });
        });
      };

      $scope.viewProfile = function(classInstance) {
        $location.path('/' + classInstance.teacher.username + '/profile');
      };

      $scope.viewClass = function(classInstance) {
        $location.path('/' + classInstance.teacher.username + '/teacher/classes/' + classInstance._id);
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
