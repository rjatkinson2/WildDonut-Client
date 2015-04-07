(function(){

  angular
    .module('wildDonut')
    .factory('State', State);

  State.$inject = [];

  function State(){

    var instance = {
      user: user
    };

    return instance;
  }

})();