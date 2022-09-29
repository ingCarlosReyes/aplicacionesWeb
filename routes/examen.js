const express = require('express')
const router = express.Router() // es una mini aplicacion, no puede mandar a escuchar. Se adihere a la aplicacion generla. va a difinir rutas.Todo lo de aqui lo vamos a heredar a la principal
const examenController=require('../controllers/examen')

//CRUD Create, Read, Updated, Delete

// Servicio para mostrar formulario
router.get('/pagina',examenController.getPagina); // vamos a estar registrando los datos metodos web es medir un archivo, una consulta etc NO GENERA UN CAMBIO DE ESTADO

//Servicio para procesar los datos del formulario
router.post('/validacion',examenController.postValidacion); //POST si genera cambios de estado. se pude llamar iguales porque uno es post y el otro get

// Servicio para mostrar formulario
router.get('/triangulos',examenController.getTriangulos); // vamos a estar registrando los datos metodos web es medir un archivo, una consulta etc NO GENERA UN CAMBIO DE ESTADO

//Servicio para procesar los datos del formulario
router.post('/triangulos',examenController.postTriangulos); //POST si genera cambios de estado. se pude llamar iguales porque uno es post y el otro get

module.exports = router 
//ruta de nuestro proyecto  App/bigote/ /home/prueba1