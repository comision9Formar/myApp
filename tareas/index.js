const fs = require('fs');

module.exports = {
    leerJSON : () => fs.readFileSync('./data/tareas.json','utf-8'),
    guadarTarea : (titulo,estado) => {
        let tareas = this.leerJSON()
        let tarea = {
            titulo,
            estado
        }
        tareas.push(tarea)
    },
    mostrarMensaje : mensaje => console.log(mensaje),
    guardarJSON : tareas => fs.writeFileSync("./data/tareas.json",JSON.stringify(tareas,null,2),"utf-8")
}