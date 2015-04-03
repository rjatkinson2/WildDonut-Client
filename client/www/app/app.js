// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function() {

  angular
    .module('wildDonut', ['ionic', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      // for any unmatched urls, redirect to /home
      $urlRouterProvider.otherwise('/');

      // full routing for app
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController'
        })
        .state('signUp', {
          url: '/signup',
          templateUrl: 'app/signup/signup.html',
          controller: 'SignupController'
        })
        .state('browse', {
          url: '/',
          templateUrl: 'app/browse/browse.html',
          controller: 'BrowseController'
        })  
        .state('studentSettings', {
          url: '/student/:username/settings',
          templateUrl: 'app/student/student-settings/student-settings.html',
          controller: 'StudentSettingsController'
        })
        .state('studentProfile', {
          url: '/student/:username',
          templateUrl: 'app/student/student-profile/student-profile.html',
          controller: 'StudentProfileController'
        })
        .state('studentBookings', {
          url: '/student/:username/bookings',
          templateUrl: 'app/student/student-bookings/student-bookings.html',
          controller: 'StudentBookingsController'
        })
        .state('teacherSettings', {
          url: '/teacher/:username/settings',
          templateUrl: 'app/teacher/teacher-settings/teacher-settings.html',
          controller: 'TeacherSettingsController'
        })
        .state('teacherProfile', {
          url: '/teacher/:username',
          templateUrl: 'app/teacher/teacher-profile/teacher-profile.html',
          controller: 'TeacherProfileController'
        })
        .state('teacherCreateBookings', {
          url: '/teacher/:username/bookings/new',
          templateUrl: 'app/teacher/teacher-create-bookings/teacher-create-bookings.html',
          controller: 'TeacherCreateBookingsController'
        })
        .state('teacherBookings', {
          url: '/teacher/:username/bookings',
          templateUrl: 'app/teacher/teacher-bookings/teacher-bookings.html',
          controller: 'TeacherBookingsController'
        });
    })
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
  });
    
})();
