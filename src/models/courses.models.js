const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Courses = db.define('courses', {
    courseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'course_id'
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    }
})

module.exports = Courses;