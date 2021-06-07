const fs = require('fs');

module.exports = {
    leerJSON : () => fs.readFileSync('./data/tareas.json','utf-8')
}