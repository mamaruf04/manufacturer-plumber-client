import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  
    apiKey: process.env.REACT_APP_apiKey,
    // apiKey: 'AIzaSyB1zq7DpPe9YFaTgkPnb_bHeuRuVAn2IsU',
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };
console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
export default auth;