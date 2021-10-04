const firebaseConfig = {
    apiKey: "AIzaSyDUhorMC6YXzqGO0jnH2KEnn_6pVKZatdA",
    authDomain: "my-portfolio-3f046.firebaseapp.com",
    projectId: "my-portfolio-3f046",
    storageBucket: "my-portfolio-3f046.appspot.com",
    messagingSenderId: "21641138919",
    appId: "1:21641138919:web:e6493bab17cc07cd9e8842"
  };

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit1')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var message = document.getElementById('message').value

  //Save Form Data To Firebase
  db.doc().set({
    name: name,
    email: email,
    subject: subject,
    message: message
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })
})
