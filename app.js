import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBoPMXdQNe5H_p4pbyRP3VUcbzd10TNM_s",
    authDomain: "my-test-project-b60d9.firebaseapp.com",
    databaseURL: "https://my-test-project-b60d9-default-rtdb.firebaseio.com",
    projectId: "my-test-project-b60d9",
    storageBucket: "my-test-project-b60d9.appspot.com",
    messagingSenderId: "873407531073",
    appId: "1:873407531073:web:2e07d78cba1f71eb105ec0",
    measurementId: "G-GP98ML0S4Y"
  };


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const sendDataButton = document.getElementById("sendData");
sendDataButton.addEventListener("click", submitForm);

const nameInput = document.getElementById("register-username");
const pwdInput = document.getElementById("register-password");


function submitForm() {

  const nameValue = nameInput.value;
  const pwdValue = pwdInput.value;


  const feedbackRef = ref(database, 'Sponsor_users');
  push(feedbackRef, {
    name: nameValue,
    password : pwdValue
  }).then(() => {

    alert("User registered!");

  }).catch((error) => {

    alert("Error recording responses: " + error.message);
  });


  nameInput.value = '';
  pwdInput.value = '';
}

