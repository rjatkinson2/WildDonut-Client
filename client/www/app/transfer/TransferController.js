(function(){

  angular
    .module('wildDonut')
    .controller('TransferController', TransferController);

  TransferController.$inject = ['$scope', '$location', 'Payments'];

  function TransferController($scope, $location, Payments){
    console.log("in transfers");
    
    Stripe.setPublishableKey('pk_test_ysLfQJR77863dJyrjKWqegC8');

    $scope.transfer = {};

    function stripeResponseHandler(status, response) {
      console.log("token response", response);
      if (response.error) {
        // Show the errors on the form
        $scope.error = response.error.message;
      } else {
        // response contains id and card, which contains additional card details
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server
        console.log("token: ", token);
        Payments.transfer({'stripeToken':token}).then(function(response){
          console.log(response);
        }).catch(function(error){
          console.log(error);
        });
      }
    }

    $scope.transfer = function () {
      console.log("transfering");
      Stripe.card.createToken({
        number: $scope.transfer.card,
        cvc: $scope.transfer.cvc,
        exp_month: $scope.transfer.month,
        exp_year: $scope.transfer.year
        }, stripeResponseHandler);
    };
  }
})();