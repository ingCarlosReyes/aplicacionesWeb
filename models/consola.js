const Sequelize = require('sequelize');


const Consola = (sequelize) => {
    sequelize.define('Consola',{
        //Forma rapida de declarar atributos
        nombreConsola: Sequelize.STRING,
        descripcionConsola: Sequelize.STRING
    })
}

module.exports = Consola;