//  Importar bibliotecas
const express = require('express');
const path = require('path');
const app = express();

// Middleware 
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// Recursos
// Definición de nuestra aplicación en localhost
app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','pagina1.html')); 
});

app.get('/creyes', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','tarea1.html')); 
});


// Lanzar la aplicación
app.listen(8081,()=>{
    console.log('Servidor en línea!');
});