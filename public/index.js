import { saveTask,getTasks,onGetTasks,deleteTask,getTask,updateTask } from "./firebase.js";

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
                    <button class="edit" data-id="${doc.id}">Editar</button>
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

        const edit = gridCont.querySelectorAll(".edit");

        edit.forEach(btn => {
            btn.addEventListener("click",async (e) => {
                const doc = await getTask(e.target.dataset.id);
                const task = doc.data();

                titulo.value = task.titulo;
                tarea.value = task.tarea;

                editStatus = true;
                id = doc.id;

                crear.value = "Actualizar";
            });
        });

    });
});

const form = document.getElementById("form");
const titulo = document.getElementById("titulo");
const tarea = document.getElementById("tarea");
const crear = document.getElementById("crear");
const gridCont = document.querySelector(".grid-cont");

let editStatus = false;
let id = "";

form.addEventListener("submit",e => {
    e.preventDefault();

    if(!editStatus) {
        saveTask(titulo.value,tarea.value);
    }else{    
        updateTask(id,{
            titulo: titulo.value,
            tarea: tarea.value
        });

        editStatus = false;
    }

    form.reset();
});