const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Categories = db.define('categories', {
    categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'category_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Categories;