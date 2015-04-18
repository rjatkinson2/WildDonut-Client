(function(){

  angular
    .module('wildDonut')
    .factory('Payments', Payments);

  Payments.$inject = ['$http', 'State', '$location'];

  function Payments($http, State, $location){
    Stripe.setPublishableKey('pk_test_ysLfQJR77863dJyrjKWqegC8');

    var instance = {
      generateTransaction: generateTransaction
    };

    return instance;
    

    function generateTransaction(payment, withdrawOrCharge) {
      Stripe.card.createToken({
        number: payment.card,
        cvc: payment.cvc,
        exp_month: payment.month,
        exp_year: payment.year
      }, function(status, response){
        if (withdrawOrCharge === 'charge'){
          stripeResponseHandler(status, response, charge, payment);
        }else if ( withdrawOrCharge === 'withdraw' ){
          stripeResponseHandler(status, response, withdraw, payment);
        }
      });
    }

    function charge(token){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/payments/charges',
        data: token,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        return response;
      });
    }

    function withdraw(token){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/payments/transfers',
        data: token,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        return response;
      });
    }

    function stripeResponseHandler(status, response, callback, paymentInfo) {
      if (response.error) {
        // Show the errors on the form
        console.log(response.error.message);
        // $scope.error = response.error.message;
      } else {
        // response contains id and card, which contains additional card details
        var token = response.id;
        var payRequest = {};
        // Insert the token into the form so it gets submitted to the server
        payRequest.token = token;
        payRequest.user_id = State.user_id;
        payRequest.class_id = paymentInfo.class_id;
        callback({'payRequest':payRequest}).then(function(response){
          console.log(response);
          $location.path('/' + State.user_id + '/student/schedule/manage');
        }).catch(function(error){
          console.log(error);
        });
      }
    }
  }
})();
