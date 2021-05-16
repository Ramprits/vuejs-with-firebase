import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA32JUPru4eC7o4IrZKRKO8G7e9QOjZJkM",
  authDomain: "vue-js-apps.firebaseapp.com",
  projectId: "vue-js-apps",
  storageBucket: "vue-js-apps.appspot.com",
  messagingSenderId: "521854102322",
  appId: "1:521854102322:web:8a3c292510d56ed3da052b",
  measurementId: "G-SVCBJ2N0L6"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export const { TimeStamp, GeoPoint } = firebase.firestore;

export const firestore = firebase
  .firestore()
  .settings({ timestampsInSnapshots: true });
export const auth = firebase.auth();
export default firebase;
