(function(){
  angular
    .module('wildDonut')
    .directive('reviewDirective', reviewDirective);

  reviewDirective.$inject = [];

  function reviewDirective(){
    var directive = {};
    directive.template = '<p><i class="ion-star" ng-repeat="i in getStarsLength(class.stars.full) track by $index"></i></p><p class="adjust"><i class="ion-ios-star-half" ng-repeat="j in getStarsLength(class.stars.half) track by $index"></i></p><p class="adjust"><i class="ion-ios-star-outline" ng-repeat="k in getStarsLength(class.stars.empty) track by $index"></i></p>';
    return directive;
  }
})();