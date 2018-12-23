import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDktn7XJ1zbbFmimLYvts-1-3xwzGcTick",
  authDomain: "catch-of-the-day-aregos.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-aregos.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;