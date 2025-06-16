// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCCPNEnSsf0HZxfF3IQ8OAhsmx1xY_tBhw",
  authDomain: "propertymanagement-pioneersit.firebaseapp.com",
  projectId: "propertymanagement-pioneersit",
  storageBucket: "propertymanagement-pioneersit.appspot.com",
  messagingSenderId: "998504991013",
  appId: "1:998504991013:web:8ff57eab5d22e87eda72cc",
});

// استدعاء FCM
const messaging = firebase.messaging();
