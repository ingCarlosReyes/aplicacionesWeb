//configuración de sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','admin','P3n4N1$#233027',{
dialect: 'mysql' ,
host: 'database-1.c4whxrqvytcb.us-east-1.rds.amazonaws.com',
dialectOptions:{
options:{
//Caracteristicas de la conexion
}
},
define:{
timestamps: false,
freezeTableName:true
}

});
//module.exports=sequelize;

const Console = sequelize.define('consola',{
//Atributos
nombre:{
type:Sequelize.STRING,
allowNull: false
},
marca:{
type: Sequelize.STRING,
allowNull: false
}
});
//prueba de conexión
sequelize.sync()
.then(resultado=>{
console.log("conexión exitosa :)")
})