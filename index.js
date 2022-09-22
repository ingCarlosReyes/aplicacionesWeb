//  Importar bibliotecas
const express = require('express');
const path = require('path');
const app = express(); 
const examenRoutes = require('./routes/examen') // se pone solo un punto porque esta en la misma carpeta, si no se ponddrian dos (..)


// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/examen',examenRoutes); // parte donde añadimos router. aqui todas las app se agregaron a la principal


// Recursos



// Lanzar la aplicación
app.listen(8083,()=>{
    console.log('Servidor en línea!');
});