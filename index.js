//  Importar bibliotecas
const express = require('express');
const path = require('path');
const app = express(); 
const consolaRoutes = require('./routes/consola') // se pone solo un punto porque esta en la misma carpeta, si no se ponddrian dos (..)


// Middleware 
//middleware functions are responsible for handling the request and crafting a response.
//You will usually see middleware defined as a function with 3 para
app.use(express.json()); // sirve para POST y PUT requests // recognize the incoming Request Object as a JSON Object.
app.use(express.urlencoded({extended:true}));//para decirle a la pagina que tipo de datos le van a llegar ecognize the incoming Request Object as any type
app.use(express.static(path.join(__dirname, 'public')));

app.use('/examen',examenRoutes); // parte donde añadimos router. aqui todas las app se agregaron a la principal


// Recursos

// Definición de nuestra aplicación en localhost
app.get('/bigote',(request,response)=>{
    console.log('Hola mundo');
    response.send('<h1>Hola mundo</h1>');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','pagina1.html')); 
});

app.get('/creyes', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','tarea1.html')); 
});


//Prueba query
app.get('/prueba1',(req,res)=>{
    console.log(req.query); // consulta en la ruta.
    res.send("Datos enviados por query "+req.query.name);
});

//Prueba params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params); //contiene propiedades asignadas a los "parámetros" de la ruta con nombre
    console.log(req.query);
    res.send("Datos enviados por params "+ req.params.name);
})

app.post('/prueba3',(req,res)=>{
    console.log(req.body); //contiene pares de datos clave-valor enviados en el cuerpo de la solicitud.
    res.send("Datos recibidos")
})


// Lanzar la aplicación
app.listen(8083,()=>{
    console.log('Servidor en línea!');
});