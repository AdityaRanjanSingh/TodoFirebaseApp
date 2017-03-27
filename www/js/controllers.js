angular.module('Todo')

.controller('loginCtrl', ['$scope', '$state','services', function($scope, $state,services) {
        $scope.signUp=false;
        

        $scope.signInToggle = function() {

        
        var email = /*$scope.user.email*/"aditya@gmail.com";
        var password = "aditya"/*$scope.user.password*/;

        if (email.length < 4) {
                    alert('Please enter an email address.');
                    return;
                }
        if (password.length < 4) {
                    alert('Please enter a password.');
                    return;
                }
        if (!$scope.signUp) {
                /*$location.path('/');*/
              
                services.signInUser(email,password,$scope);

            } else {
                
                // Sign in with email and pass.
                // [START authwithemail
                var username = $scope.user.name 
                services.signUpUser(username,email,password);
                        
                // [END authwithemail]
            }

          
            
        }

    }])



.controller('notesCtrl',['$scope', '$stateParams',"$ionicModal","$ionicPopup",'services',
  function($scope, $stateParams,$ionicModal,$ionicPopup,services) {
    function fetchNotes(){
      services.fetchUserNotes();

    }
   fetchNotes();


  $scope.clicked = false;
   $ionicModal.fromTemplateUrl('templates/my-modal.html', {
    
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
    /*  $scope.openNewNote=function(){

      var myPopup = $ionicPopup.show({
    templateUrl: 'templates/my-modal.html',
    title: 'Search',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Search</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.notes.searchText) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            searchNote();
            return $scope.notes.searchText;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
  }
 */
 
 
  $scope.saveNote =function(){

    var title = $scope.modal.newnotetitle;
    var text= $scope.modal.newnotetext;
    if (title || text) {
      if (!title) {
        title = text
      }
      if (!text) {
        text = ""
      }
      services.saveNewNote(title,text);
    }
    
    
  }
  $scope.openSearchPopover = function(){
      var myPopup = $ionicPopup.show({
    template: '<input type="text" placeholder=" Title or Content" data-ng-modal="notes.searchText">',
    title: 'Search',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Search</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.notes.searchText) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            searchNote();
            return $scope.notes.searchText;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

    $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  function searchNote(){
    var searchText =$scope.searchText;
  }
}] )

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
