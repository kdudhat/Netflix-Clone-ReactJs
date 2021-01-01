import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA7I_xfwczcnbyQBwvErc_lot5l34aVadY",
  authDomain: "netflix-cccdd.firebaseapp.com",
  projectId: "netflix-cccdd",
  storageBucket: "netflix-cccdd.appspot.com",
  messagingSenderId: "1090079934116",
  appId: "1:1090079934116:web:ac363c24bb3d93d1fe4831",
  measurementId: "G-KJL2TPDS6C",
};
const firebase = Firebase.initializeApp(config);
//commit after export data
// seedDatabase(firebase);
export { firebase };
