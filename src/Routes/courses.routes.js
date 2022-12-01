const router = Router();
const coursesControllers = require('../Controllers/courses.controllers');
const { Router } = require('express');

router.get('/courses/info/', coursesControllers.getAllCoursesInfo)
router.post('/courses/', coursesControllers.create);
router.get('/courses/', coursesControllers.getAll);
router.get('/courses/:course_id', coursesControllers.getOne);
router.patch('/courses/:course_id', coursesControllers.updatePartial);
router.delete('/courses/:course_id', coursesControllers.delete);

module.exports = router;



