const Sequelize = require('sequelize');


const Consola = (sequelize) => {
    sequelize.define('Company',{
        //Forma rapida de declarar atributos
        nombreCompany: Sequelize.STRING,
    })
}

module.exports = Consola;
