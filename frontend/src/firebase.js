import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// const firebaseConfig = {
//     apiKey: "AIzaSyArden92QZIaNZtxAAfROLxGVFHkWumJVw",
//     authDomain: "filmyduniya-hai.firebaseapp.com",
//     projectId: "filmyduniya-hai",
//     storageBucket: "filmyduniya-hai.appspot.com",
//     messagingSenderId: "718197843003",
//     appId: "1:718197843003:web:550c069366b094a1c3681e"
//   };
const firebaseConfigr = {
  apiKey: "AIzaSyCuNuL4kLAACmnYymZHwDqtkxA2F51sf0o",
  authDomain: "filmyduniya-hai-a881a.firebaseapp.com",
  projectId: "filmyduniya-hai-a881a",
  storageBucket: "filmyduniya-hai-a881a.appspot.com",
  messagingSenderId: "465461535126",
  appId: "1:465461535126:web:88f1e599f3a1af45c77db7",
  measurementId: "G-1B88ZECCJ7"
};
  const firebaseApp=firebase.initializeApp(firebaseConfigr);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {auth}
  export default db;