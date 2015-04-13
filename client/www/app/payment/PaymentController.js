(function(){

  angular
    .module('wildDonut')
    .controller('PaymentController', PaymentController);

  PaymentController.$inject = ['$scope', '$location', 'Payments'];

  function PaymentController($scope, $location, Payments){
    console.log("in payments");
    
    Stripe.setPublishableKey('pk_test_ysLfQJR77863dJyrjKWqegC8');

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
        Payments.generate({'stripeToken':token}).then(function(response){
          console.log(response);
        }).catch(function(error){
          console.log(error);
        });
      }
    }

    $scope.charge = function () {
      console.log("checking");
      Stripe.card.createToken({
        number: $scope.payment.card,
        cvc: $scope.payment.cvc,
        exp_month: $scope.payment.month,
        exp_year: $scope.payment.year
        }, stripeResponseHandler);
    };
  }
})();