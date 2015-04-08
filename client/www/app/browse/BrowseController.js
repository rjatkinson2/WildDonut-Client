(function() {

  angular
    .module('wildDonut')
    .controller('BrowseController', BrowseController);

    BrowseController.$inject = ['$scope', 'CollectionManager'];

    function BrowseController($scope, CollectionManager) {
      CollectionManager.getAvailableClasses().then(function(classes) {
        $scope.classes = classes.data;
      });
    }

})();