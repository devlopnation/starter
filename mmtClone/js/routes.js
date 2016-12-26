angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.plane', {
    url: '/planeTab',
    views: {
      'tab1': {
        templateUrl: 'templates/plane.html',
        controller: 'planeCtrl'
      }
    }
  })

  .state('tabsController.hotels', {
    url: '/hotelsTab',
    views: {
      'tab4': {
        templateUrl: 'templates/hotels.html',
        controller: 'hotelsCtrl'
      }
    }
  })

  .state('tabsController.bus', {
    url: '/busTab',
    views: {
      'tab2': {
        templateUrl: 'templates/bus.html',
        controller: 'busCtrl'
      }
    }
  })

  .state('tabsController.train', {
    url: '/trainTab',
    views: {
      'tab3': {
        templateUrl: 'templates/train.html',
        controller: 'trainCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.commonList'
      2) Using $state.go programatically:
        $state.go('tabsController.commonList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab4/page7
      /page1/tab2/page7
      /page1/tab3/page7
  */
  .state('tabsController.commonList', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/commonList.html',
        controller: 'commonListCtrl'
      },
      'tab4': {
        templateUrl: 'templates/commonList.html',
        controller: 'commonListCtrl'
      },
      'tab2': {
        templateUrl: 'templates/commonList.html',
        controller: 'commonListCtrl'
      },
      'tab3': {
        templateUrl: 'templates/commonList.html',
        controller: 'commonListCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.confirmBooking'
      2) Using $state.go programatically:
        $state.go('tabsController.confirmBooking');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab4/page8
      /page1/tab2/page8
      /page1/tab3/page8
  */
  .state('tabsController.confirmBooking', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/confirmBooking.html',
        controller: 'confirmBookingCtrl'
      },
      'tab4': {
        templateUrl: 'templates/confirmBooking.html',
        controller: 'confirmBookingCtrl'
      },
      'tab2': {
        templateUrl: 'templates/confirmBooking.html',
        controller: 'confirmBookingCtrl'
      },
      'tab3': {
        templateUrl: 'templates/confirmBooking.html',
        controller: 'confirmBookingCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.login'
      2) Using $state.go programatically:
        $state.go('tabsController.login');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab4/page9
      /page1/tab2/page9
      /page1/tab3/page9
  */
  .state('tabsController.login', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/planeTab')

  

});