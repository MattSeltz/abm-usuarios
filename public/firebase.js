// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    doc,
    getDoc,
    updateDoc
 } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ5EWOyesBrIhgqIRK5fExHBdVe9L_woE",
  authDomain: "abm-usuarios.firebaseapp.com",
  projectId: "abm-usuarios",
  storageBucket: "abm-usuarios.appspot.com",
  messagingSenderId: "185951316866",
  appId: "1:185951316866:web:9a275aba20c787d1aafd9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (titulo,tarea,prioridad) => {
  addDoc(collection(db, "tasks"),{titulo,tarea,prioridad});

  if(prioridad) {
    console.log("Works");
  }
}

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"),callback);

export const deleteTask = id => deleteDoc(doc(db, "tasks",id));

export const getTask = id => getDoc(doc(db, "tasks", id));

export const updateTask = (id,newFields) => updateDoc(doc(db, "tasks",id),newFields);