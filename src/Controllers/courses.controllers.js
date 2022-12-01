const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const Courses = require("../models/courses.models");


class coursesControllers {
  static async create(req, res) {
    const { title, description, instructor, categoryId } = req.body;
    try {
      const course = await Courses.create({
        title,
        description,
        instructor,
        categoryId,
      });
      res.status(201).json(course);
    } catch (error) {
      res.status(500).json({ error: { message: error.errors?.[0].message } });
    }
  }

  static async getAll(req, res) {
    try {
      const courses = await Courses.findAll();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getAllCoursesInfo(req, res){
    try {
      const coursesInfo = await Courses.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include:[
          {
            model: Categories,
            attributes: ["name"]
          },
          {
            model: Videos,
            attributes: ["title", "url"]
          },
        ] 
      })
      res.status(200).json(coursesInfo);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getOne(req, res) {
    const { course_id } = req.params;
    try {
      const course = await Courses.findByPk(course_id);
      if (course) {
        res.status(200).json(course);
      } else {
        res.status(500).json({error: {message: "Course not found"}});
      }
    } catch (error) {
        res.status(500).json({error: {message: "Course not found"}});
    }
  }

  static async updatePartial(req, res) {
    const { description } = req.body;
    const { course_id } = req.params;

    try {
      const course = await Courses.findByPk(course_id);
      if (course) {
        course.description = description;
        course.save();
        res.status(200).json(course);
      } else {
        res.status(500).json({error: {message: "Course not found"}});
      }
    } catch (error) {
        res.status(500).json({error: {message: "Course not found"}});
    }
  }

  static async delete(req, res){
    const { course_id } = req.params;
    try {
        const course = await Courses.findByPk(course_id);
        if(course){
            course.destroy();
            res.sendStatus(202);
        }else{
            res.status(500).json({error: {message: "Course not found"}});
        }
    } catch (error) {
        res.status(500).json({error: {message: "Course not found"}});
    }
  }
}

module.exports = coursesControllers;
