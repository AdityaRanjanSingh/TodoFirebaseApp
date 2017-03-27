angular.module("Todo")
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

   this.saveNewNote=function(title,text,$scope){
    var user  = firebase.auth().currentUser;
       
          var postData = {
                          user:user.email,
                          title:title,
                          text:text
                          
                        };
          var newPostKey = firebase.database().ref().child('notes-application').push().key;
          var updates = {};
  updates['/all-notes/' + newPostKey] = postData;
  updates['/user-notes/' + user.uid + '/' + newPostKey] = postData;
  updates['/users/'+user.uid] = user.email
          
          firebase.database().ref("/notes-application").update(updates);
   }

   this.fetchUserNotes=function(){
    var user= firebase.auth().currentUser;
    var userPostsRef = firebase.database().ref('notes-application/user-notes' + user.uid);
      userPostsRef.on('child_added', function(data) {
    
    });

   }


}
]);