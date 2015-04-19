(function() {

  angular
    .module('wildDonut')
    .factory('ReviewManager', ReviewManager);

    ReviewManager.$inject = [];

    function ReviewManager($scope) {

      var instance = {
        getStars: getStars
      };

      return instance;

      // implementation of functions
      function getStars(rating, type) {
        var stars = {};
        stars.full = Math.floor(rating);
        stars.half = Math.ceil((Math.floor(rating * 2)/2).toFixed(1)-Math.floor(rating));
        stars.empty = 5 - (stars.full + stars.half);
        return stars;
      }

    }

})();
