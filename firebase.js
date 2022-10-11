// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { 
    getFirestore,
    collection,
    addDoc,
    getDocs
 } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2e7gmVaV7lwP7NBc-nUix9s5uvNNPxWo",
  authDomain: "abmusuarios-5d7a2.firebaseapp.com",
  databaseURL: "https://abmusuarios-5d7a2-default-rtdb.firebaseio.com",
  projectId: "abmusuarios-5d7a2",
  storageBucket: "abmusuarios-5d7a2.appspot.com",
  messagingSenderId: "956579821936",
  appId: "1:956579821936:web:94416c52803eb08491f7b5",
  measurementId: "G-98P7FEDVMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (titulo,tarea) => addDoc(collection(db, "tasks"),{titulo,tarea})

export const getTasks = () => getDocs(collection(db, "tasks"));