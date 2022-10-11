import { saveTask } from "./firebase.js";

const form = document.getElementById("form");
const titulo = document.getElementById("titulo");
const tarea = document.getElementById("tarea");
const crear = document.getElementById("crear");
const gridCont = document.querySelector("grid-cont");

form.addEventListener("submit",e => {
    e.preventDefault();

    saveTask(titulo.value,tarea.value)
});