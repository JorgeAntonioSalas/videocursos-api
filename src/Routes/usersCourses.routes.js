const { Router } = require('express');
const router = Router();
const usersCoursesControllers = require('../Controllers/usersCourses.controllers');


router.post('/users/courses/', usersCoursesControllers.create);
router.get('/users/courses/', usersCoursesControllers.getAll);
//router.delete('/users/:user_id/courses/:course_id', usersCoursesControllers.delete);


module.exports = router;