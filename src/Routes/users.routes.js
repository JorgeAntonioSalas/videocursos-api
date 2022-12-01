const router = Router();
const usersControllers = require('../Controllers/users.controllers');
const { Router } = require('express');


router.post('/users/', usersControllers.create);
router.get('/users/', usersControllers.getAll);
router.get('/users/:user_id/courses', usersControllers.getCoursesByUser);
router.get('/users/:user_id', usersControllers.getOne);
router.patch('/users/:user_id', usersControllers.updatePartial);
router.delete('/users/:user_id', usersControllers.delete);


module.exports = router;