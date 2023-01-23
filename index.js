// Importamos la libreria xlsx
const XLSX = require('xlsx');
// Importamos fs de node
const fs = require('fs');

const excelJson = () => {
    // Leemos el archivo excel
    const file = XLSX.readFile("./users_data.xlsx");

    // Obtener la hoja del excel a la cual queremos convertir a JSON
    const fileData = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);

    // Convertir en una cadena de texto JSON
    const data = JSON.stringify(fileData);

    // Creamos el archivo json utilizando writeFile de fs
    // El primer parametro es el nombre del archivo
    // El segundo parametro es la informacion del archivo
    // El tercer parametro es un callback que nos va a indicar si hay un error o todo esta correcto
    fs.writeFile('users-data.json', data, (err) => {
        if (err) throw err;
        console.log('File Create Successfully');
    });
};

excelJson();