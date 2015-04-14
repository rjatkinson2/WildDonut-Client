(function() {

  angular
    .module('wildDonut')
    .controller('BrowseController', BrowseController);

    BrowseController.$inject = ['$scope', '$location', 'CollectionManager'];

    function BrowseController($scope, $location, CollectionManager) {

      $scope.getAvailableClasses = function() {
        CollectionManager.getAvailableClasses().then(function(classes) {
          $scope.classes = classes;
        });
      };

      $scope.viewClass = function(classInformation) {
        $location.path('/' + classInformation.teacher.username + '/teacher/classes/' + classInformation._id);
      };

      $scope.init = function() {
        $scope.getAvailableClasses();
      };

      $scope.init();
    }

})();
