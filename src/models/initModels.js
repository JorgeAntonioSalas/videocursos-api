const Users = require("./users.models");
const Courses = require("./courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");
const UsersCourses = require("./usersCourses.models");

const initModels = () => {
  Users.belongsToMany(Courses, {
    through: UsersCourses,
    foreignKey: "user_id",
  });
  Courses.belongsToMany(Users, {
    through: UsersCourses,
    foreignKey: "course_id",
  });
  Categories.hasMany(Courses, {
    foreignKey: 'category_id'
  });
  Courses.belongsTo(Categories, {
    foreignKey: 'category_id'
  });
  Courses.hasMany(Videos, {
    foreignKey: 'course_id'
  });
  Videos.belongsTo(Courses, {
    foreignKey: 'course_id'
  })
};

module.exports = initModels;