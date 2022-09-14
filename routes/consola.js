const express = require('express')
const router = express.Router() // es una mini aplicacion, no puede mandar a escuchar. Se adihere a la aplicacion generla. va a difinir rutas.Todo lo de aqui lo vamos a heredar a la principal
const consolaController=require('../controllers/consola')

//CRUD Create, Read, Updated, Delete

// Servicio para mostrar formulario
router.get('/altaConsola',consolaController.getAltaConsola); // vamos a estar registrando los datos metodos web es medir un archivo, una consulta etc NO GENERA UN CAMBIO DE ESTADO

//Servicio para procesar los datos del formulario
router.post('/altaConsola',consolaController.postAltaConsola); //POST si genera cambios de estado. se pude llamar iguales porque uno es post y el otro get

//Servicio para consultar todos los datos
router.get('/consultaConsola',consolaController.getConsultaConsola);



// Servicio para mostrar formulario
router.get('/palindrome',consolaController.getPalindrome); // vamos a estar registrando los datos metodos web es medir un archivo, una consulta etc NO GENERA UN CAMBIO DE ESTADO

//Servicio para procesar los datos del formulario
router.post('/palindrome',consolaController.postPalindrome); //POST si genera cambios de estado. se pude llamar iguales porque uno es post y el otro get


// Servicio para mostrar formulario
router.get('/idiomaF',consolaController.getIdiomaF); // vamos a estar registrando los datos metodos web es medir un archivo, una consulta etc NO GENERA UN CAMBIO DE ESTADO

//Servicio para procesar los datos del formulario
router.post('/idiomaF',consolaController.postIdiomaF); //POST si genera cambios de estado. se pude llamar iguales porque uno es post y el otro get



module.exports = router 
//ruta de nuestro proyecto  App/bigote/ /home/prueba1