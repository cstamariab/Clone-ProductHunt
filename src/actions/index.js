import alt from '../alt';
import * as firebase from 'firebase';
import _ from 'lodash';
 let config = {
      apiKey: "AIzaSyDs3yrciL4qD2KGY3dpPN6P6mz2gg56lJE",
      authDomain: "codehunt-demo-101ab.firebaseapp.com",
      databaseURL: "https://codehunt-demo-101ab.firebaseio.com/",
      storageBucket: "codehunt-demo-101ab.appspot.com",
      messagingSenderId: "323824725829"
 };
 var app = firebase.initializeApp(config);
 var database = app.database();  

class Actions {
	addComment(productId, comment){
		return (dispatch) => {
			var fireRef = database.ref('comments').child(productId).push(comment);
			
		}
	}
	getComments(productId){
		return (dispatch) => {			
				database.ref('comments').child(productId).on('value' , (snapshot) => {
				  let commentsVal = snapshot.val();				  
				  var comments = Object.keys(commentsVal).map((comment_key) => {			  	
				  	var item = _.clone(commentsVal[comment_key]);
				  	item.key = comment_key;
				  	return item ;
				  });

				  dispatch(comments);
				});
		
		}
	}
	addVote(productId , userId){
		return (dispatch) => {
			var voteRef = database.ref('votes').child(productId).child(userId);
			voteRef.on('value' , (snapshop) => {
				if (snapshop.val() == null) {

					voteRef.set(true);

					var firebaseRef = database.ref('products').child(productId).child('upvote');
					var vote = 0;

					firebaseRef.on('value' , (snapshop) => {				
						vote = snapshop.val();	
						return vote;
					});	

					firebaseRef.set(vote+1);
				}
			})
		}
	}
	getProducts(){
		return (dispatch) => {			
			database.ref('products').on('value', snap => {
			  let productsValue = snap.val();
			  
			  var products = Object.keys(productsValue).map((product_key) => {			  	
			  	var item = _.clone(productsValue[product_key]);
			  	item.key = product_key;
			  	return item ;
			  });			  
			  
			  dispatch(products);  			  
			});
		}
	}
	addProduct(product){		
		return (dispatch) => {
			database.ref('products').push(product);			
		}
	}
	initSession(){
		return (dispatch) => {
			var user;
			firebase.auth().onAuthStateChanged(function(user_data) {			
				  if (user_data) {
				    user = {
					  	id: user_data.uid,
					  	name: user_data.displayName,
					  	avatar: user_data.photoURL,
					  	email: user_data.email,
					  	token: user_data.token
					}
				  }else{
				  	user= null;
				  }
				  setTimeout(() => dispatch(user));
			});
		}
	}
	login(){
		return (dispatch) => {
			var provider = new firebase.auth.FacebookAuthProvider();
			    firebase.auth().signInWithPopup(provider).then(function(result) {
				  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
				  var token = result.credential.accessToken;
				  // The signed-in user info.
				  var authData = result.user;
				  				
				  var user = {
				  	id: authData.uid,
				  	name: authData.displayName,
				  	avatar: authData.photoURL,
				  	email: authData.email,
				  	token: token
				  }
				    // Get a key for a new Post.
				  var newUserKey = firebase.database().ref('users').push().key;

				  // Write the new post's data simultaneously in the posts list and the user's post list.
				  var updates = {};
				  updates['/users/' + newUserKey] = user;				 

				  firebase.database().ref().update(updates);
			      			
				  dispatch(user);
				  
				}).catch(function(error) {
				 	if(error){return;}				 
				});
			}
	}
	logout(){
		return (dispatch) => {
			firebase.auth().signOut().then(function() {
				dispatch(null)
			}, function(error) {
			// An error happened.
			});
		}
	}
}

export default alt.createActions(Actions);