(function(){

  angular
    .module('wildDonut')
    .controller('PaymentController', PaymentController);

  PaymentController.$inject = ['$scope', '$location', 'Payments', 'State'];

  function PaymentController($scope, $location, Payments, State){
    
    Stripe.setPublishableKey('pk_test_ysLfQJR77863dJyrjKWqegC8');

    $scope.payment = {};
    var payRequest = {};

    function stripeResponseHandler(status, response) {
      if (response.error) {
        // Show the errors on the form
        $scope.error = response.error.message;
      } else {
        // response contains id and card, which contains additional card details
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server
        payRequest.token = token;
        payRequest.rate = State.rate;
        payRequest.user_id = State.user_id;
        payRequest.class_id = State.class_id;
        Payments.generate({'payRequest':payRequest}).then(function(response){
          console.log(response);
        }).catch(function(error){
          console.log(error);
        });
      }
    }

    $scope.charge = function () {
      Stripe.card.createToken({
        number: $scope.payment.card,
        cvc: $scope.payment.cvc,
        exp_month: $scope.payment.month,
        exp_year: $scope.payment.year
      }, stripeResponseHandler);
    };

    $scope.init = function(){
      $scope.rate = State.rate;
      $scope.classname = State.class_name;
      console.log("state", State);
    };

    $scope.init();
  }
})();