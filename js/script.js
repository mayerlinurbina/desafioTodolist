let tareas = [
    {
        id: 1,
        description: "Ir a comprar la cocacola para el almuerzo",
        completado: false,
    },
    {
        id: 2,
        description: "Trabajar",
        completado: false,
    },
    {
        id: 3,
        description: "Caminar en la luna",
        completado: false,
    },
];

const pintarTareas = () => {
    let listaTareasContenido = "";

    tareas.forEach((tarea) => {
        const contenidoTarea = `
            <tr>
                <th scope="row">${tarea.id}</th>
                <td>${tarea.description}</td>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>
                    <span>X</span>
                </td>
            </tr>
        `;

        listaTareasContenido += contenidoTarea;
    });

    const contenedorTareas = document.getElementById("tareas");
    contenedorTareas.innerHTML = listaTareasContenido;

    agregarEventoBorrar();
    manejarEstado();
    contarTareas();
};

const agregarTarea = () => {
    const inputNuevaTarea = document.getElementById("input-nueva-tarea");

    if (!inputNuevaTarea.value) {
        alert("Llene el campo");
        return;
    }

    const nuevaTarea = {
        id: tareas.length + 1,
        description: inputNuevaTarea.value,
        completado: false,
    };

    tareas.push(nuevaTarea);

    inputNuevaTarea.value = "";

    pintarTareas(tareas);
};

const agregarEventoBorrar = () => {
    const btnsEliminar = document.querySelectorAll("#tareas span");

    btnsEliminar.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tareas.splice(index, 1);
            pintarTareas();
            agregarEventoBorrar();
    manejarEstado();
    contarTareas();
        });
    });
};

const manejarEstado = () => {
    const checkboxesTarea = document.querySelectorAll(
        '#tareas input[type="checkbox"]'
    );

    checkboxesTarea.forEach((checkbox, index) => {
        checkbox.addEventListener('click', () => {
            tareas[index].completado = !tareas[index].completado;
            contarTareas()
        })
    });
};

const contarTareas = () => {
    const totalTareas = tareas.length;
    const totalTareasCompletadas = tareas.filter(tarea => tarea.completado === true).length;

    console.log(totalTareasCompletadas)

    const total = document.getElementById("total");
    total.innerHTML = `Total: <b>${totalTareas}</b>`;

    const totalCompletadas = document.getElementById('total-completadas')
    totalCompletadas.innerHTML = `Realizadas: <b>${totalTareasCompletadas}</b>`
}

const btnAgregarTarea = document.getElementById("btn-agregar-tarea");
btnAgregarTarea.addEventListener("click", agregarTarea);

pintarTareas();
