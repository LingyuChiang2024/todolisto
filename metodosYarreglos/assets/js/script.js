const tareasFijas = [
    { id:1, tareas: "Hacer Ejercicio", completado: false },
    { id:2, tareas: "Cocinar", completado: false },
    { id:3, tareas: "Estudiar", completado: false },
]
const inputTarea = document.querySelector("#ingresartarea")
const listaDeTareas = document.querySelector("#listadetareas")
const btnAgregar = document.querySelector("#btnagregar")
const total = document.querySelector("#totaltareas")
const realizadas = document.querySelector("#tareasrealizadas")
const agregarTarea = () => {
    const deberes = inputTarea.value.trim()
    if(deberes === ""){
        alert("Debes escribir una tarea") 
        return
    }
const ultimaTarea = tareasFijas[tareasFijas.length-1]
const nuevosDeberes ={
    id: ultimaTarea? ultimaTarea.id +1 : 1,
    tareas: deberes,
    completado: false,
}
tareasFijas.push(nuevosDeberes)
inputTarea.value= ""
pintando()
}
const pintando = () => {
    listaDeTareas.innerHTML = tareasFijas.map((tarea) => `
    <ol start = ${tarea.id}>
    <li style="text-align: end;">${tarea.tareas}<input id="checkeo" type="checkbox"${tarea.completado? "checked": "" } onclick="verdaderofalso(${tarea.id})">
    <button id="eliminar" onclick="eliminartarea(${tarea.id})">Eliminar Tarea</button>
    </li></ol>`).join('')
    total.innerHTML = tareasFijas.length
    realizadas.innerHTML = tareasFijas.filter((tarea)=> tarea.completado).length
}
const verdaderofalso = (id)=>{
    const index = tareasFijas.findIndex((tareas) => tareas.id === +id)
    const estado = tareasFijas[index].completado;
    tareasFijas[index].completado = !estado;
  pintando();
}
const eliminartarea = (id)=>{
    const indice = tareasFijas.findIndex((tarea)=> tarea.id === +id)
    tareasFijas.splice(indice,1)
    pintando()    
}
pintando()
btnAgregar.addEventListener("click", agregarTarea)