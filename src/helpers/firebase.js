// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAixVeJsUwUMee5g9opXFD9LY5QCYufpq4",
  authDomain: "daypitch-adc30.firebaseapp.com",
  projectId: "daypitch-adc30",
  storageBucket: "daypitch-adc30.appspot.com",
  messagingSenderId: "105668930204",
  appId: "1:105668930204:web:04a3e7c573d9a09170db59",
  measurementId: "G-FD10NV5M8C"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage };
