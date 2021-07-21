import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCPodBDr-Lfe8sYC9vABK5co5FeD3nQwsc",
    authDomain: "slack-build-f853a.firebaseapp.com",
    projectId: "slack-build-f853a",
    storageBucket: "slack-build-f853a.appspot.com",
    messagingSenderId: "521912389977",
    appId: "1:521912389977:web:a623371db1662124cf3c48",
    measurementId: "G-RBXV4KQE60"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};

