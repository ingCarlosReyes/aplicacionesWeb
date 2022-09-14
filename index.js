//  Importar bibliotecas
const express = require('express');
const path = require('path');
const app = express();
const consolaRoutes = require('./routes/consola') // se pone solo un punto porque esta en la misma carpeta, si no se ponddrian dos (..)


// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));//para decirle a la pagina que tipo de datos le van a llegar
app.use(express.static(path.join(__dirname, 'public')));

app.use('/consola',consolaRoutes); // parte donde añadimos router. aqui todas las app se agregaron a la principal
// pusimos el diagonal consola para poder dividir secciones mas facil. ahora es necseario poner el /consola par entrar. esta mas ordenado


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
    console.log(req.query);
    res.send("Datos enviados por query "+req.query.name);
});

//Prueba params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send("Datos enviados por params "+ req.params.name);
})

app.post('/prueba3',(req,res)=>{
    console.log(req.body);
    res.send("Datos recibidos")
})


// Lanzar la aplicación
app.listen(8081,()=>{
    console.log('Servidor en línea!');
});