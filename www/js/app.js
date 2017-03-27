// Ionic Todo App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'Todo' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'Todo.services' is found in services.js
// 'Todo.controllers' is found in controllers.js
angular.module('Todo',['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
   $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })

  // Each tab has its own nav history stack:

  .state('notes', {
    url: '/notes',
    templateUrl: 'templates/notes.html',
    controller:'notesCtrl'
    
  });

  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})

/*.controller('loginCtrl', ['$scope', '$state','services', function($scope, $state,services) {
        $scope.signUp=false;
        

        $scope.Submit = function() {

        var username = $scope.user.name
        var email = $scope.user.email;
        var password = $scope.user.password;

        if (email.length < 4) {
                    alert('Please enter an email address.');
                    return;
                }
        if (password.length < 4) {
                    alert('Please enter a password.');
                    return;
                }
        if (!$scope.signUp) {
               
              
                services.signInUser(email,password,$scope);

            } else {
                
                // Sign in with email and pass.
                // [START authwithemail
                services.signUpUser(username,email,password,$scope);
                        
                // [END authwithemail]
            }

          
            
        }

    }])
.service("services",["$state","$log", function services($state,$log){

   this.signInUser = function(useremail,password,$scope){
    firebase.auth().signInWithEmailAndPassword(useremail, password).then(function() {

                  $state.go('notes');
                   

                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    $scope.error = errorCode + " " + errorMessage;
                   
                    // ...
                });
   }

   this.signUpUser=function(name,email,password){
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {

                    $state.go('notes');

                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    $scope.error = error.code +" "+error.message;
                    // ...
                });
   }
}
])*/;


