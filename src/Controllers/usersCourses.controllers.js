const UsersCourses = require("../models/usersCourses.models");

class usersCoursesControllers {
  static async create(req, res) {
    const { user_id, course_id } = req.body;
    try {
      const userCourse = await UsersCourses.create({ user_id, course_id });
      res.status(201).json(userCourse);
    } catch (error) {
      res.status(500).json({ error: { message: error.errors?.[0].message } });
    }
  }
  static async getAll(req, res) {
    try {
      const usersCourses = await UsersCourses.findAll();
      res.status(200).json(usersCourses);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

module.exports = usersCoursesControllers;
