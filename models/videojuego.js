const Sequelize = require('sequelize');

module.export = (sequelize) => {
    sequelize.define('Videojuego',{
        //Fomra especifica de declarar atributos
        nombreVideojuego:{
            type: Sequelize.STRING,
            allowNull: true
        },
        clasificacion: Sequelize.STRING
    })
}

