import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyB7d2M4tAoyyEM7Z9CmUKheJGCy6_AZBWU",

  authDomain: "cv-builder-application-12208.firebaseapp.com",

  projectId: "cv-builder-application-12208",

  storageBucket: "cv-builder-application-12208.appspot.com",

  messagingSenderId: "165292202779",

  appId: "1:165292202779:web:f905623a49e740183711be",

  measurementId: "G-02NPGKFYHF"

  };



  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ experimentalForceLongPolling: true });


  export const firebaseAuth = firebase.auth