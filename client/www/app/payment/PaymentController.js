(function(){

  angular
    .module('wildDonut')
    .controller('PaymentController', PaymentController);

  PaymentController.$inject = ['$scope', '$stateParams', '$location', 'ClassManager', 'Payments', 'State'];

  function PaymentController($scope, $stateParams, $location, ClassManager, Payments, State){
    
    $scope.payment = {};
    $scope.payment.class_id = $stateParams.id;

    $scope.getClass = function(){
      ClassManager.getClass($scope.payment.class_id).then(function(classInfo){
        $scope.rate = classInfo.rate;
        $scope.classname = classInfo.name;
      });
    };

    $scope.init = function(){
      $scope.getClass();
    };

    $scope.init();
    
    $scope.charge = function(){
      Payments.generateTransaction($scope.payment, 'charge');
    };
    $scope.withdraw = function(){
      Payments.generateTransaction($scope.payment, 'withdraw');
    };
  }
})();