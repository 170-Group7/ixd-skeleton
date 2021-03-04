var firebaseConfig =  {
    apiKey: "AIzaSyBz4Quff2kcXTtn0HJGKmmpnVbnkdAE4VQ",
    authDomain: "team7-10f0b.firebaseapp.com",
    databaseURL: "https://team7-10f0b-default-rtdb.firebaseio.com",
    projectId: "team7-10f0b",
    storageBucket: "team7-10f0b.appspot.com",
    messagingSenderId: "724620905643",
    appId: "1:724620905643:web:25038af02e28569130bbee"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

export {auth, db}