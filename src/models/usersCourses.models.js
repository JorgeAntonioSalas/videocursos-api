const db = require('../utils/database');
const { DataTypes }= require('sequelize');

const UsersCourses = db.define('users_courses', {}, { timestamps: false });

module.exports = UsersCourses;