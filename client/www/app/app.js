// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function() {

  angular
    .module('wildDonut', ['ionic', 'ui.router', 'facebook', 'ionic.rating', 'ngCookies', 'angularFileUpload'])
    .config(function($stateProvider, $urlRouterProvider, FacebookProvider) {

      FacebookProvider.init('489613531189387');

      // for any unmatched urls, redirect to /home
      $urlRouterProvider.otherwise('/');

      // full routing for app
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          // To prevent screen jumps when entering and leaving input fields
          onEnter: function($ionicPlatform){
            $ionicPlatform.ready(function() {
              if(window.cordova ){
                 cordova.plugins.Keyboard.disableScroll(true);
              }
           });
          },
          onExit: function($ionicPlatform){
            $ionicPlatform.ready(function() {
               if(window.cordova){
                 cordova.plugins.Keyboard.disableScroll(false);
                }
            });
          }
        })
        .state('signUp', {
          url: '/signup',
          templateUrl: 'app/signup/signup.html',
          controller: 'SignupController',
          // To prevent screen jumps when entering and leaving input fields
          onEnter: function($ionicPlatform){
            $ionicPlatform.ready(function() {
              if(window.cordova ){
                 cordova.plugins.Keyboard.disableScroll(true);
              }
           });
          },
          onExit: function($ionicPlatform){
            $ionicPlatform.ready(function() {
               if(window.cordova){
                 cordova.plugins.Keyboard.disableScroll(false);
                }
            });
          }
        })
        .state('browse', {
          url: '/browse',
          templateUrl: 'app/browse/browse.html',
          controller: 'BrowseController'
        })
        .state('profile', {
          url: '/:username/profile',
          templateUrl: 'app/profile/profile-view/profile-view.html',
          controller: 'ProfileViewController'
        })
        .state('profileSettings', {
          url: '/:username/profile/settings',
          templateUrl: 'app/profile/profile-settings/profile-settings.html',
          controller: 'ProfileSettingsController'
        })
        .state('studentSchedule', {
          url: '/:username/student/schedule/manage',
          templateUrl: 'app/student/student-manage-schedule/student-manage-schedule.html',
          controller: 'StudentManageScheduleController'
        })
        .state('manageClasses', {
          url: '/:username/teacher/classes/manage',
          templateUrl: 'app/teacher/teacher-manage-classes/teacher-manage-classes.html',
          controller: 'TeacherManageClassesController'
        })
        .state('teacherSchedule', {
          url: '/:username/teacher/classes/booked',
          templateUrl: 'app/teacher/teacher-booked-classes/teacher-booked-classes.html',
          controller: 'TeacherBookedClassesController'
        })
        .state('createClass', {
          url: '/:username/teacher/classes/new',
          templateUrl: 'app/teacher/teacher-create-class/teacher-create-class.html',
          controller: 'TeacherCreateClassController'
        })
        .state('editClass', {
          url: '/:username/teacher/classes/:id/edit',
          templateUrl: 'app/teacher/teacher-edit-class/teacher-edit-class.html',
          controller: 'TeacherEditClassController'
        })
        .state('viewClass', {
          url: '/:username/teacher/classes/:id',
          templateUrl: 'app/teacher/view-class/view-class.html',
          controller: 'ViewClassController'
        })
        .state('pay', {
          url: '/pay',
          templateUrl: 'app/payment/payment.html',
          controller: 'PaymentController'
        })
        .state('review', {
          url: '/:username/teacher/classes/:id/review',
          templateUrl: 'app/review/review.html',
          controller: 'ReviewController'
        });
    })
    .run(['$ionicPlatform','$rootScope', 'State', '$location', function($ionicPlatform, $rootScope, State, $location) {

      $ionicPlatform.ready(function() {

        $rootScope.$on('$stateChangeStart', function(event){
          if (!State.username && (['/login', '/signup'].indexOf($location.path()) === -1)){
            $location.path('/login');
            return false;
          }
        });
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    }]);

})();
