const path = require("path") // esto es necesario para que jale formulario. se define el path

//Proceso cuando se llame a la ruta
exports.getPagina = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','info.html'));
} //si se define una funcion aqui un metodo y caundo se llama se lo va aponer a la llamada par que se pueda usar esa funcion

exports.postValidacion = (req,res)=>{
    console.log(req.body)
    res.json({estado: "Exitoso"})
}

//Proceso cuando se llame a la ruta
exports.getTriangulos = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','triangulos.html'));
} //si se define una funcion aqui un metodo y caundo se llama se lo va aponer a la llamada par que se pueda usar esa funcion

exports.postTriangulos = (req,res)=>{
    console.log(req.body.nombreConsola)
    var myvar = req.body.nombreConsola
    var hayAngulo = false
    var sumaAng = 0
    var spliteado = (myvar.split(" "))

    var hola = 0

    hola = Number(spliteado[0]) + Number(spliteado[1]) + Number(spliteado[2])
    //parseInt(spliteado)
    console.log(spliteado)
    console.log(hola)



    for (var i of spliteado){
        parseInt(i)
        if(i == 90){
            hayAngulo = true
        }
        sumaAng = sumaAng + i
        console.log(i)
        console.log(sumaAng)
        console.log(hayAngulo)
    }

    if (hayAngulo && hola == 180){

        res.json({estado: "Es un triangulo rectangulo"})
    }

    res.json({estado: "No es un triangulo rectangulo"})

}






