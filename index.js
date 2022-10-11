import { saveTask,getTasks,onGetTasks,deleteTask } from "./firebase.js";

addEventListener("DOMContentLoaded",async () => {
    onGetTasks((querySnapshot) => {
        let html = "";

        querySnapshot.forEach(doc => {
            const task = doc.data();
            html += `
                <div class="task">
                    <h3>${task.titulo}</h3>
                    <p>${task.tarea}</p>
                    <button class="btns" data-id="${doc.id}">Eliminar</button>
                </div>
            `
        });

        gridCont.innerHTML = html;

        const btns = gridCont.querySelectorAll(".btns");

        btns.forEach(btn => {
            btn.addEventListener("click",e => {
                deleteTask(e.target.dataset.id);
            });
        });
    })
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