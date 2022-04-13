const firebaseConfig = {
    apiKey: "AIzaSyDNGo4acKuRRiKnb4ii_8dM1FkJ3O_ZTEE",
    authDomain: "contact-form-295b4.firebaseapp.com",
    databaseURL: "https://contact-form-295b4-default-rtdb.firebaseio.com",
    projectId: "contact-form-295b4",
    storageBucket: "contact-form-295b4.appspot.com",
    messagingSenderId: "675479278265",
    appId: "1:675479278265:web:9499c52234b863570d4168"
  };
  //initialize
  firebase.initializeApp(firebaseConfig);

// referencing messages collection
var messagesref = firebase.database().ref('infos');
  // submit form
const submit = document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();
    
    let name = getElement('name');
    let email = getElement('email');
    let message = getElement('message');

    saveMessage(name, email, message);
    document.getElementById('contactForm').reset();
    alert('Message Sent!');
}

// getting value function
function getElement(id){
  return  document.getElementById(id).value;
}

//save message to firebase database
function saveMessage(name, email, message){
    let newMessageRef = messagesref.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}