const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/connection'); 

const Car = sequelize.define('car', {//!User -> users
    //Definimos las columnas aquí
    brand: {
        tyope: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    colorbrand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
})

module.exports = Car;