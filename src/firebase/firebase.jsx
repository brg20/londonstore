import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(

{
  apiKey: "AIzaSyBv4j8Rh_vpRyHZqzQaXrjjjZcVnGiI1Ng",
  authDomain: "londonstore-ecommerce.firebaseapp.com",
  projectId: "londonstore-ecommerce",
  storageBucket: "londonstore-ecommerce.appspot.com",
  messagingSenderId: "243587903690",
  appId: "1:243587903690:web:57620c38d64987b1830433"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
