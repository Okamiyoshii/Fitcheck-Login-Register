import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
 import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyDMlwze8hpf1qPp3xwQ6m-kPWjdIy1T8KY",
   authDomain: "fitcheck-register.firebaseapp.com",
   projectId: "fitcheck-register",
   storageBucket: "fitcheck-register.firebasestorage.app",
   messagingSenderId: "388373049230",
   appId: "1:388373049230:web:24f1464fc7495a7b8ebedf"
 };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 auth.languageCode = 'en';

 const provider = new GoogleAuthProvider(); 
 const googleLogin = document.getElementById('google-Login');
 googleLogin.addEventListener('click', function() { 
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
 });
});