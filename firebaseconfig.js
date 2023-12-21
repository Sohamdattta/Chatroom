// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDwIyWTJ_ZWe763CiUCFliL2qpLyOLr4UM",
    authDomain: "chatroom-aa027.firebaseapp.com",
    projectId: "chatroom-aa027",
    storageBucket: "chatroom-aa027.appspot.com",
    messagingSenderId: "1088824181857",
    appId: "1:1088824181857:web:69ea0d0c5ec8a99cc69620",
    measurementId: "G-5S55XX606C"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export  {auth};
