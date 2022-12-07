import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBdJkXhaS020Z1Crgka9f9DMIrvk5k-NrY",
  authDomain: "thedojo-e788d.firebaseapp.com",
  projectId: "thedojo-e788d",
  storageBucket: "thedojo-e788d.appspot.com",
  messagingSenderId: "484896551732",
  appId: "1:484896551732:web:c8fce4966caaa30d11ab61"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }