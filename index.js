import { saveTask,getTasks } from "./firebase.js";

addEventListener("DOMContentLoaded",async () => {
    const querySnapshot = await getTasks();

    let html = "";

    querySnapshot.forEach(doc => {
        const task = doc.data();
        html += `
            <div class="task">
                <h3>${task.titulo}</h3>
                <p>${task.tarea}</p>
            </div>
        `
    });

    gridCont.innerHTML = html;
});

const form = document.getElementById("form");
const titulo = document.getElementById("titulo");
const tarea = document.getElementById("tarea");
const crear = document.getElementById("crear");
const gridCont = document.querySelector(".grid-cont");

form.addEventListener("submit",e => {
    e.preventDefault();

    saveTask(titulo.value,tarea.value)

    form.reset();
});