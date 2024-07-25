//!User -> users

//? modelo:User -> tabla:users
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

   // En Mayúsculas y singular      // en minúsculas y singular
// const NombreModelo = sequelize.define('nombreModelo', {
//     // Definimos las columnas aquí
//     columna1: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     columna2: {
//         type: DataTypes.STRING(100)
//         // allowNull por defecto esta en true
//     }
// });

const User = sequelize.define('user', {//!User -> users
    //Definimos las columnas aquí
    firstName: {
        tyope: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        tyope: DataTypes.STRING,
        allowNull: false
    },
    email: {
        tyope: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        tyope: DataTypes.DATEONLY, //Año, mes y día
        allowNull: false
    },
    
})

module.exports = User;