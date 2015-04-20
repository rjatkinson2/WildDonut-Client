// Karma configuration

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine', 'mocha', 'sinon', 'chai', 'chai-sinon'],

    // list of files / patterns to load in the browser
    files: [
      // lib files
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/lib/angular-ui-router/release/angular-ui-router.js',
      'www/lib/angular-animate/angular-animate.js',
      'www/lib/angular-sanitize/angular-sanitize.js',
      'www/lib/angular-facebook/lib/angular-facebook.js',
      'www/lib/ionic-rating/ionic-rating.js',

      // app - need to load feature modules first, otherwise app breaks
      'www/app/app.js',
      'www/app/navigation/NavigationController.js',
      'www/app/auth/authenticatorService.js',
      'www/app/state/stateService.js',
      'www/app/class-manager/classManagerService.js',
      'www/app/collection-manager/collectionManagerService.js',
      'www/app/user-manager/userManagerService.js',
      'www/app/login/LoginController.js',
      'www/app/payment/PaymentController.js',
      'www/app/payment/paymentService.js',
      'www/app/transfer/TransferController.js',
      'www/app/transfer/TransferService.js',
      'www/app/signup/SignupController.js',
      'www/app/browse/BrowseController.js',
      'www/app/profile/profile-settings/ProfileSettingsController.js',
      'www/app/profile/profile-view/ProfileViewController.js',
      'www/app/student/student-manage-schedule/StudentManageScheduleController.js',
      'www/app/teacher/teacher-booked-classes/TeacherBookedClassesController.js',
      'www/app/teacher/teacher-create-class/TeacherCreateClassController.js',
      'www/app/teacher/teacher-edit-class/TeacherEditClassController.js',
      'www/app/teacher/teacher-manage-classes/TeacherManageClassesController.js',
      'www/app/teacher/view-class/ViewClassController.js',
      'www/app/review/ReviewController.js',
      'www/app/**/*.js',
       
      // html templatess 
      'www/app/**/*.html',

      // all specs
      'www/test/**/*.js'
    ],

    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],

    preprocessors: {
      // Source files you want to generate coverage reports for
      // This should not include tests or libraries
      // These files will be instrumented by Istanbul
      'www/app/**/*.js': ['coverage'],
      'www/app/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      stripPrefix: 'www/',
      moduleName: 'templates'
    },

    // progress reporter: lists each test run and whether they pass/fail
    // coverage reporter: creates coverage reports for every tested browser
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    singleRun: false,

    // report which specs run too slow
    reportSlowerThan: 500,

    // any additional plugins needed for testing
    plugins: [
      'karma-jasmine',
      'karma-sinon',
      'karma-chai-sinon',
      'karma-coverage',
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor'
    ]
  });
};