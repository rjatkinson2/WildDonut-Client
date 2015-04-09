(function() {

  angular
    .module('wildDonut')
    .controller('BrowseController', BrowseController);

    BrowseController.$inject = ['$scope', 'CollectionManager'];

    function BrowseController($scope, CollectionManager) {

      $scope.getAvailableClasses = function() {
        CollectionManager.getAvailableClasses().then(function(classes) {
          $scope.classes = classes;
        });
      }

      $scope.init = function() {
        $scope.getAvailableClasses();
      };

      $scope.init();

    }

})();
