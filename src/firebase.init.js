// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUXtey3ingdrVQ9SdQzmL8MG5dw03fIxw",
  authDomain: "ass-11-copy.firebaseapp.com",
  projectId: "ass-11-copy",
  storageBucket: "ass-11-copy.appspot.com",
  messagingSenderId: "959465817139",
  appId: "1:959465817139:web:ea1bf3983f6eb74a6c8f46",
  measurementId: "G-PGVP6K763G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// export default  auth;
export default auth;