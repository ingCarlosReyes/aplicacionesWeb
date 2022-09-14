const path = require("path") // esto es necesario para que jale formulario. se define el path

//Proceso cuando se llame a la ruta
exports.getAltaConsola = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
} //si se define una funcion aqui un metodo y caundo se llama se lo va aponer a la llamada par que se pueda usar esa funcion

exports.postAltaConsola = (req,res)=>{
    console.log(req.body)
    res.json({estado: "Exitoso"})
}

exports.getConsultaConsola = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}




//Proceso cuando se llame a la ruta
exports.getPalindrome = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','tarea2Palindromo.html'));
}
exports.postPalindrome = (req,res)=>{
    var myvar = req.body.nombreConsola
    myvar  = myvar.replaceAll(/\./g, '').replaceAll(/,/g, '').replaceAll(/\s+/g, '').toLowerCase()  // Quitando los espacios, comas, puntos y mayus
    var esPalindrome = true
    for(let i in req.body.nombreConsola){
        start= myvar[0] //te da la 1ra letra
        finish=myvar.slice(-1) //te da la ultima letra
        if(myvar.length > 1){
            if(start == finish){
                myvar=myvar.slice(1,-1) //quitamos las dos letras que ya checamos de cada esquina
            }else{
                esPalindrome = false
                break}
        }else{break}
    }
    if (esPalindrome){
        res.json({estado: "Es palindrome"})
    }else{res.json({estado:"No es palindrome"})}
}




//Proceso cuando se llame a la ruta
exports.getIdiomaF = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','tarea2IdiomaF.html'));
}
exports.postIdiomaF = (req,res)=>{
    var myvar = req.body.nombreConsola
    myvar = myvar.replaceAll('efe','e').replaceAll('afa','a').replaceAll('ifi','i').replaceAll('ofo','o').replaceAll('ufu','u')
    res.json({Resultado: myvar})
}
