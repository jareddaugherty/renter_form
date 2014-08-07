
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

  //   app.config(['$routeProvider',
  // function($routeProvider) {
  //   $routeProvider.
  //       when('/', {
  //       templateUrl: 'templates/maplist.html',
  //       controller: 'MapListController'
  //     }).
  //     when('/messaging', {
  //       templateUrl: 'templates/messaging.html',
  //       controller: 'MessagingController'
  //     }).
  //     when('/flow', {
  //       templateUrl: 'templates/flow.html',
  //       controller: 'FlowController'
  //     }).
  //     when('/settings', {
  //       templateUrl: 'templates/settings.html',
  //       controller: 'SettingsController'
  //     }).
  //     otherwise({
  //       redirectTo: '/',
  //       controller: 'MapListController'
  //     });
  // }]);
    
    $stateProvider
    
        // route to show our basic form (/form)

        // .state('root', {
        //     url: '/'
        //     templateUrl: 'templates/maplist.html',
        //     controller: 'MapListController'
        // })

        // .state('messaging', {
        //     url: '/messaging'
        //     templateUrl: 'templates/flow.html',
        //     controller: 'FlowController'
        // })

        // .state('flow', {
        //     url: '/flow'
        //     templateUrl: 'templates/flow.html',
        //     controller: 'FlowController'
        // })

        // .state('settings', {
        //     url: '/settings'
        //     templateUrl: 'templates/settings.html',
        //     controller: 'SettingsController'
        // })


        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })

        .state('form.contact', {
            url: '/contact',
            templateUrl: 'form-contact.html'
        })

        .state('form.current_address', {
            url: '/current_address',
            templateUrl: 'form-current-address.html'
        })

        .state('form.previous_address', {
            url: '/previous_address',
            templateUrl: 'form-previous-address.html'
        })

        .state('form.vehicles', {
            url: '/vehicles',
            templateUrl: 'form-vehicles.html'
        })

        .state('form.employer', {
            url: '/employer',
            templateUrl: 'form-employer.html'
        })

        .state('form.pets', {
            url: '/pets',
            templateUrl: 'form-pets.html'
        })

        .state('form.reference', {
            url: '/reference',
            templateUrl: 'form-reference.html'
        })
        
        // url will be /form/payment
        .state('form.misc', {
            url: '/misc',
            templateUrl: 'form-misc.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    

    $scope.submitForm = function(isValid){
        if(isValid){
            alert('form submitted');
        }
    }
    
});

