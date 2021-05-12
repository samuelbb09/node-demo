module.exports = (sequelize,type) => {
    return sequelize.define("loco",{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        sexo: type.STRING,
        apellido: type.STRING
    })
}