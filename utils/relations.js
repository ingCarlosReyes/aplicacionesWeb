function applyRelations(sequelize){
    console.log(sequelize.models);
    const Company = sequelize.models.Company;
    const Videojuego = sequelize.model.Videojuego;
    const Consola = sequelize.models.Consola;
    const ConsolaVideojuego = sequelize.models.ConsolaVideojuego;

    //Compañia puedde desarrollar varios videojuegos
    Company.hasMany(Videojuego);
    //Un videojuego solo puede ser desarrollado por una compañia
    Videojuego.belongsTo(Company);

    //Un videojuego puede ejecutarse en muchas consolas
    Videojuego.belongstoMany(Consola,{through:ConsolaVideojuego});
    //Una consola puede tener muchos videojuegos
    Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego});

}

module.exports = {applyRelations};