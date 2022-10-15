import { saveTask,getTasks,onGetTasks,deleteTask,getTask,updateTask } from "./firebase.js";

addEventListener("DOMContentLoaded",async () => {
    onGetTasks((querySnapshot) => {
        let html = "";

        let fecha = new Date();

        let day;
        let month;

        switch(fecha.getDay()) {
            case 0: day = "Domingo"; break;
            case 1: day = "Miercoles"; break;
            case 2: day = "Martes"; break;
            case 3: day = "Miercoles"; break;
            case 4: day = "Jueves"; break;
            case 5: day = "Viernes"; break;
            case 6: day = "Sabado"; break;
        }

        switch(fecha.getMonth()) {
            case 0: month = "Enero"; break;
            case 1: month = "Febrero"; break;
            case 2: month = "Marzo"; break;
            case 3: month = "Abril"; break;
            case 4: month = "Mayo"; break;
            case 5: month = "Junio"; break;
            case 6: month = "Julio"; break;
            case 7: month = "Agosto"; break;
            case 8: month = "Septiembre"; break;
            case 9: month = "Octubre"; break;
            case 10: month = "Noviembre"; break;
            case 11: month = "Diciembre"; break;
        }

        querySnapshot.forEach(doc => {
            const task = doc.data();
            html += `
                <div class="task">
                    <h3>${task.titulo}</h3>
                    <p>${task.tarea}</p>
                    <button class="btns" data-id="${doc.id}">Eliminar</button>
                    <button class="edit" data-id="${doc.id}">Editar</button>
                    <p>${day} ${fecha.getDate()} <br> ${month} ${fecha.getFullYear()}</p>
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