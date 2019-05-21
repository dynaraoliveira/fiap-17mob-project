var db;
var storage;
var storageRef;
$(document).ready(function() {

    $("#back").click(function() {
        window.history.back();
    });

    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyBTNvr1US7SIiIfBhdvYwE0HgxxRLHuxIU",
        authDomain: "dynara-teste.firebaseapp.com",
        databaseURL: "https://dynara-teste.firebaseio.com",
        projectId: "dynara-teste",
        storageBucket: "dynara-teste.appspot.com",
        messagingSenderId: "812042450385",
        appId: "1:812042450385:web:a18c01e733361b8f"
    };
    
    var app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore(app);
    storage = firebase.storage();
    storageRef = storage.ref();

});

function login(email, password, page) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
            window.location = page;
        })
        .catch(function(error) {
            console.error(error);
        });
}

function register(name, email, password, page) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            db.collection("USERS_PROFILE").doc(firebase.auth().currentUser.uid).set({
                    name: name,
                    email: email,
                    photo: ""
                })
                .then(function() {
                    window.location = page;
                })
                .catch(function(error) {
                    console.error(error);
                });
        })
        .catch(function(error) {
            console.error(error);
        });
}